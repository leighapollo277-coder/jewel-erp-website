#!/usr/bin/env python3
"""
audit_ground_truth.py - Mechanical verification engine for Project Ground Truth (SSOT).
Verifies claim-source attribution, ID uniqueness, source registry existence, and integrity.
Zero external dependencies (Python 3 standard library only).
"""

import sys
import os
import re
import json
import argparse
from datetime import datetime
from pathlib import Path

# Exit Codes
EXIT_PASS = 0
EXIT_WARNING = 1
EXIT_FAIL = 2

class GroundTruthAuditor:
    def __init__(self, filepath, strict=False):
        self.filepath = Path(filepath).resolve()
        self.strict = strict
        self.errors = []
        self.warnings = []
        self.facts = []
        self.sources = {}
        self.metadata = {}

    def audit(self):
        if not self.filepath.exists():
            self.errors.append(f"File not found: {self.filepath}")
            return self._build_result(EXIT_FAIL)

        content = self.filepath.read_text(encoding="utf-8")
        self._parse_metadata(content)
        self._parse_claims_table(content)
        self._parse_sources_registry(content)
        self._verify_attributions()
        self._verify_sources_usage()

        status_code = EXIT_PASS
        if self.errors:
            status_code = EXIT_FAIL
        elif self.warnings and self.strict:
            status_code = EXIT_FAIL
        elif self.warnings:
            status_code = EXIT_WARNING

        return self._build_result(status_code)

    def _parse_metadata(self, content):
        meta_patterns = {
            "project_name": r"-\s+\*\*Project Name\*\*:\s*(.*)",
            "last_audited": r"-\s+\*\*Last Audited\*\*:\s*(.*)",
            "audit_status": r"-\s+\*\*Audit Status\*\*:\s*(.*)",
            "auditor_version": r"-\s+\*\*Auditor Version\*\*:\s*(.*)"
        }
        for key, pat in meta_patterns.items():
            match = re.search(pat, content, re.IGNORECASE)
            if match:
                self.metadata[key] = match.group(1).strip()

    def _parse_claims_table(self, content):
        # Locate the table under ## 1. Ground Truth Registry
        table_match = re.search(r"##\s+1\.\s+Ground Truth Registry\b[^\n]*\n(.*?)(?=\n##\s+\d|\Z)", content, re.DOTALL)
        if not table_match:
            self.errors.append("Section '## 1. Ground Truth Registry' missing or not found.")
            return

        section_text = table_match.group(1)
        # Extract markdown table lines starting with |
        lines = [line.strip() for line in section_text.split("\n") if line.strip().startswith("|")]

        if len(lines) < 2:
            self.errors.append("Claims table must have a header row and separator.")
            return

        seen_ids = set()
        # Row 0: Header, Row 1: Separator, Row 2+: Data rows
        for idx, row in enumerate(lines[2:], start=3):
            cols = [c.strip() for c in row.split("|")[1:-1]]
            if len(cols) < 6:
                self.errors.append(f"Row {idx} malformed (expected 6 columns: ID, Category, Claim, Source Ref, Status, Updated At). Got: {row}")
                continue

            raw_id = cols[0].strip("` ")
            category = cols[1]
            claim = cols[2]
            source_refs_raw = cols[3]
            status = cols[4].strip("` ").upper()
            updated_at = cols[5]

            # Check ID format
            if not raw_id:
                self.errors.append(f"Row {idx} has empty Fact ID.")
                continue

            if raw_id in seen_ids:
                self.errors.append(f"Duplicate Fact ID detected: '{raw_id}' on row {idx}.")
            seen_ids.add(raw_id)

            # Extract source references like [SRC-001]
            refs = re.findall(r"\[SRC-[^\]]+\]", source_refs_raw)

            fact_entry = {
                "id": raw_id,
                "category": category,
                "claim": claim,
                "source_refs": refs,
                "raw_source_refs": source_refs_raw,
                "status": status,
                "updated_at": updated_at,
                "row_index": idx
            }
            self.facts.append(fact_entry)

    def _parse_sources_registry(self, content):
        # Locate ## 2. Sources Registry
        registry_match = re.search(r"##\s+2\.\s+Sources Registry\b[^\n]*\n(.*?)(?=\n##\s+\d|\Z)", content, re.DOTALL)
        if not registry_match:
            self.errors.append("Section '## 2. Sources Registry' missing.")
            return

        registry_text = registry_match.group(1)
        # Strip out HTML comments before parsing blocks
        clean_registry = re.sub(r"<!--.*?-->", "", registry_text, flags=re.DOTALL)
        source_blocks = re.split(r"(?=###\s+\[SRC-[^\]]+\])", clean_registry)

        for block in source_blocks:
            clean_block = block.strip()
            if not clean_block or not clean_block.startswith("###"):
                continue

            header_match = re.match(r"###\s+(\[SRC-[^\]]+\])", clean_block)
            if not header_match:
                continue

            src_id = header_match.group(1)
            src_type_match = re.search(r"-\s+\*\*Type\*\*:\s*`?([A-Z0-9_]+)`?", clean_block, re.IGNORECASE)
            ref_match = re.search(r"-\s+\*\*Reference\*\*:\s*(.*)", clean_block)
            quote_match = re.search(r"-\s+\*\*Exact Quote / URL\*\*:\s*(.*)", clean_block)
            verified_match = re.search(r"-\s+\*\*Verified By\*\*:\s*(.*)", clean_block)

            self.sources[src_id] = {
                "id": src_id,
                "type": src_type_match.group(1).upper() if src_type_match else "UNKNOWN",
                "reference": ref_match.group(1).strip() if ref_match else "",
                "quote_url": quote_match.group(1).strip() if quote_match else "",
                "verified_by": verified_match.group(1).strip() if verified_match else "",
                "raw": clean_block
            }

    def _verify_attributions(self):
        for fact in self.facts:
            fid = fact["id"]
            status = fact["status"]
            refs = fact["source_refs"]

            # If status is UNSUPPORTED, automatically fail
            if status == "UNSUPPORTED":
                self.errors.append(f"Fact '{fid}' has status 'UNSUPPORTED'. It must have a verified source before ratification.")
                continue

            # Check if source refs exist
            if not refs:
                self.errors.append(f"Fact '{fid}' on row {fact['row_index']} is missing Source Ref. Unbacked AI claims are strictly forbidden.")
                continue

            # Verify every cited source exists in registry
            for ref in refs:
                if ref not in self.sources:
                    self.errors.append(f"Fact '{fid}' references missing source '{ref}' (not found in Sources Registry).")

    def _verify_sources_usage(self):
        cited_sources = set()
        for fact in self.facts:
            for ref in fact["source_refs"]:
                cited_sources.add(ref)

        for src_id in self.sources:
            if src_id not in cited_sources:
                self.warnings.append(f"Orphan source detected: '{src_id}' is defined in Sources Registry but never cited by any Fact.")

    def stamp_audit(self, status_str):
        """Update Last Audited and Audit Status in the file directly."""
        if not self.filepath.exists():
            return
        content = self.filepath.read_text(encoding="utf-8")
        now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        content = re.sub(r"(-\s+\*\*Last Audited\*\*:\s*).*", rf"\g<1>{now_str}", content)
        content = re.sub(r"(-\s+\*\*Audit Status\*\*:\s*).*", rf"\g<1>{status_str}", content)

        self.filepath.write_text(content, encoding="utf-8")

    def _build_result(self, code):
        status_label = "PASS" if code == EXIT_PASS else ("WARNING" if code == EXIT_WARNING else "FAIL")
        return {
            "code": code,
            "status": status_label,
            "file": str(self.filepath),
            "facts_count": len(self.facts),
            "sources_count": len(self.sources),
            "errors": self.errors,
            "warnings": self.warnings,
            "metadata": self.metadata
        }

def init_ground_truth(target_dir, project_name=None):
    target_path = Path(target_dir).resolve() / "GROUND_TRUTH.md"
    if target_path.exists():
        print(f"Error: {target_path} already exists. Refusing to overwrite.")
        return 1

    template_path = Path(__file__).resolve().parent.parent / "templates" / "GROUND_TRUTH.template.md"
    if not template_path.exists():
        print(f"Error: Template not found at {template_path}")
        return 1

    content = template_path.read_text(encoding="utf-8")
    proj_name = project_name or Path(target_dir).resolve().name
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    content = content.replace("[PROJECT_NAME]", proj_name)
    content = content.replace("[TIMESTAMP]", now_str)

    target_path.write_text(content, encoding="utf-8")
    print(f"Initialized Ground Truth at: {target_path}")
    return 0

def main():
    parser = argparse.ArgumentParser(description="Mechanical audit engine for Project Ground Truth.")
    parser.add_argument("--file", "-f", default="GROUND_TRUTH.md", help="Path to GROUND_TRUTH.md (default: ./GROUND_TRUTH.md)")
    parser.add_argument("--json", action="store_true", help="Output results in JSON format")
    parser.add_argument("--strict", action="store_true", help="Treat warnings as failures")
    parser.add_argument("--stamp", action="store_true", help="Automatically stamp audit timestamp & status on PASS/WARNING")
    parser.add_argument("--init", action="store_true", help="Initialize GROUND_TRUTH.md in target directory")
    parser.add_argument("--name", help="Project name to use with --init")

    args = parser.parse_args()

    if args.init:
        target_dir = os.path.dirname(args.file) or "."
        sys.exit(init_ground_truth(target_dir, args.name))

    auditor = GroundTruthAuditor(args.file, strict=args.strict)
    result = auditor.audit()

    if args.stamp and result["code"] in (EXIT_PASS, EXIT_WARNING):
        auditor.stamp_audit(result["status"])

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print("=" * 60)
        print(f" Ground Truth Audit Report: {result['status']}")
        print("=" * 60)
        print(f"File:          {result['file']}")
        print(f"Facts Count:   {result['facts_count']}")
        print(f"Sources Count: {result['sources_count']}")
        print(f"Last Audited:  {result['metadata'].get('last_audited', 'N/A')}")
        print("-" * 60)

        if result["errors"]:
            print("🚨 ERRORS (MUST FIX):")
            for err in result["errors"]:
                print(f"  ❌ {err}")

        if result["warnings"]:
            print("⚠️ WARNINGS:")
            for warn in result["warnings"]:
                print(f"  ⚠️ {warn}")

        if not result["errors"] and not result["warnings"]:
            print("✅ All claims are properly attributed to verified sources. Zero orphan facts.")

        print("=" * 60)

    sys.exit(result["code"])

if __name__ == "__main__":
    main()
