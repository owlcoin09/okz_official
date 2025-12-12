import { useLanguageStore } from '@/store/languageStore';
import { getTranslation, Translations } from '@/i18n/translations';

export function useTranslation(): Translations {
  const { locale } = useLanguageStore();
  return getTranslation(locale);
}

