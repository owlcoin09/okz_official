// 语言配置 - 基于GDP排名前十和欧盟排名前十的国家
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  country: string;
}

export const languages: Language[] = [
  // GDP排名前十的国家
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', country: 'United States' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', country: 'China' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', country: 'Japan' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', country: 'Germany' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', country: 'India' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', country: 'France' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', country: 'Italy' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', country: 'Brazil' },
  // 欧盟排名前十的国家（补充）
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', country: 'Spain' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', country: 'Netherlands' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', country: 'Poland' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', country: 'Sweden' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰', country: 'Denmark' },
];

export const defaultLanguage = 'zh';

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find(lang => lang.code === code);
}

