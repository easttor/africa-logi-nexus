export type Language = 'en' | 'fr' | 'ar' | 'pt';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const languages: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    direction: 'ltr'
  }
];

export const defaultLanguage: Language = 'en';

// Language detection
export function detectLanguage(): Language {
  const browserLang = navigator.language.split('-')[0];
  const supportedLang = languages.find(lang => lang.code === browserLang);
  return supportedLang ? supportedLang.code : defaultLanguage;
}

// Direction detection
export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return languages.find(l => l.code === lang)?.direction || 'ltr';
}
