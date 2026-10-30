import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import { solutionsTranslations } from '../i18n/solutionsTranslations';
import { getLocalizedPath } from '../utils/navigation';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLang }) {
  const [lang, setLang] = useState(() => {
    if (initialLang) return initialLang;
    if (typeof window !== 'undefined') {
      if (window.location.pathname.startsWith('/en')) return 'en';
      const saved = localStorage.getItem('jes-lang');
      if (saved === 'en' || saved === 'zh') return saved;
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('lang') === 'en') return 'en';
    }
    return 'zh';
  });

  const toggleLanguage = () => {
    const nextLang = lang === 'zh' ? 'en' : 'zh';
    setLang(nextLang);
    if (typeof window !== 'undefined') {
      const newPath = getLocalizedPath(nextLang, window.location.pathname);
      window.history.pushState(null, '', newPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const changeLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'zh') {
      setLang(newLang);
      if (typeof window !== 'undefined') {
        const newPath = getLocalizedPath(newLang, window.location.pathname);
        window.history.pushState(null, '', newPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jes-lang', lang);
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
      document.documentElement.setAttribute('data-lang', lang);
      
      const updateTitle = () => {
        const currentPath = window.location.pathname;
        const isSolutions = currentPath === '/solutions' || currentPath === '/en/solutions';
        
        if (isSolutions) {
          if (lang === 'en') {
            document.title = 'SME Automation & IT Solutions | AlphaOne Technology';
          } else {
            document.title = '中小企智能自動化與 IT 方案 ｜ 思琳科技 AlphaOne Technology';
          }
        } else {
          if (lang === 'en') {
            document.title = 'Jewel Source JES | AlphaOne Technology Official';
          } else {
            document.title = '珠寶源 JES ｜ 思琳科技 AlphaOne Technology 官方資訊';
          }
        }
      };

      updateTitle();
      window.addEventListener('popstate', updateTitle);
      return () => window.removeEventListener('popstate', updateTitle);
    }
  }, [lang]);

  const t = translations[lang] || translations.zh;
  const st = solutionsTranslations[lang] || solutionsTranslations.zh;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, toggleLanguage, t, st }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
