import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { defaultLanguage } from '@/i18n/languages';

interface LanguageStore {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      locale: defaultLanguage,
      setLocale: (locale: string) => set({ locale }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

