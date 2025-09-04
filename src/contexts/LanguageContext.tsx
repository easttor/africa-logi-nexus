import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, defaultLanguage, getDirection } from '@/lib/i18n';

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
  // Simple fallback translations to avoid import issues
  const basicTranslations = {
    'common.africaLogi': 'AfricaLogi',
    'common.backToHome': 'Back to Home',
    'landing.hero.title': 'Unifying Africa\'s Supply Chain',
    'landing.hero.subtitle': 'The continent\'s first unified logistics platform',
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Welcome to your AfricaLogi command center'
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    document.documentElement.dir = getDirection(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return basicTranslations[key as keyof typeof basicTranslations] || key;
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