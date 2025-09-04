// Temporary mock for useLanguage while debugging React issues
export function useLanguage() {
  return {
    currentLanguage: 'en' as const,
    setLanguage: () => {},
    direction: 'ltr' as const,
    t: (key: string) => key // Just return the key for now
  };
}