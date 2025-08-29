import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages, defaultLanguage, detectLanguage, getDirection } from '@/lib/i18n';

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
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Detect browser language on mount
    const detectedLang = detectLanguage();
    setCurrentLanguage(detectedLang);
    loadTranslations(detectedLang);
  }, []);

  const loadTranslations = async (lang: Language) => {
    try {
      const translationModule = await import(`@/locales/${lang}.json`);
      setTranslations(translationModule.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to English
      const fallbackModule = await import('@/locales/en.json');
      setTranslations(fallbackModule.default);
    }
  };

  const setLanguage = async (lang: Language) => {
    setCurrentLanguage(lang);
    await loadTranslations(lang);
    
    // Update document direction
    document.documentElement.dir = getDirection(lang);
    document.documentElement.lang = lang;
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
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
