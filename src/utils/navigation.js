/**
 * navigation.js - SPA Navigation & Path-Preserving Localization Utilities
 */

export function navigateTo(path) {
  if (typeof window !== 'undefined') {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }
}

export function getLocalizedPath(targetLang, currentPath) {
  if (!currentPath) return targetLang === 'en' ? '/en' : '/';
  const isEn = currentPath.startsWith('/en');
  if (targetLang === 'en') {
    if (isEn) return currentPath;
    return currentPath === '/' ? '/en' : `/en${currentPath}`;
  } else {
    if (!isEn) return currentPath;
    const stripped = currentPath.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
}

