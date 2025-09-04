import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages, defaultLanguage, getDirection } from '@/lib/i18n';

// Import translations directly to avoid async issues
import enTranslations from '@/locales/en.json';
import frTranslations from '@/locales/fr.json';
import arTranslations from '@/locales/ar.json';
import ptTranslations from '@/locales/pt.json';

const translationsMap = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations,
  pt: ptTranslations,
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize with saved language or browser preference
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language') as Language;
      if (savedLang && languages.find(l => l.code === savedLang)) {
        return savedLang;
      }
      
      // Fallback to browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (languages.find(l => l.code === browserLang)) {
        return browserLang;
      }
    }
    return defaultLanguage;
  });

  // Set document attributes on language change
  useEffect(() => {
    document.documentElement.dir = getDirection(currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    try {
      const translations = translationsMap[currentLanguage];
      const keys = key.split('.');
      let value: any = translations;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Fallback to English if key not found in current language
          const fallbackTranslations = translationsMap[defaultLanguage];
          let fallbackValue: any = fallbackTranslations;
          
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              return key; // Return key if not found in fallback either
            }
          }
          
          return typeof fallbackValue === 'string' ? fallbackValue : key;
        }
      }
      
      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  const direction = getDirection(currentLanguage);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      direction,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}