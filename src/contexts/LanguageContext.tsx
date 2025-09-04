import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, languages, defaultLanguage, getDirection } from '@/lib/i18n';

// Import translations statically to avoid async issues
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
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    
    // Update document direction
    document.documentElement.dir = getDirection(lang);
    document.documentElement.lang = lang;
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    const translations = translationsMap[currentLanguage] || translationsMap[defaultLanguage];
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
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