import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

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
      const newPath = nextLang === 'en' ? '/en' : '/';
      window.history.pushState(null, '', newPath);
    }
  };

  const changeLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'zh') {
      setLang(newLang);
      if (typeof window !== 'undefined') {
        const newPath = newLang === 'en' ? '/en' : '/';
        window.history.pushState(null, '', newPath);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jes-lang', lang);
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
      document.documentElement.setAttribute('data-lang', lang);
      
      if (lang === 'en') {
        document.title = 'Jewel Source JES | AlphaOne Technology Official';
      } else {
        document.title = '珠寶源 JES ｜ 思琳科技 AlphaOne Technology 官方資訊';
      }
    }
  }, [lang]);

  const t = translations[lang] || translations.zh;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, toggleLanguage, t }}>
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
