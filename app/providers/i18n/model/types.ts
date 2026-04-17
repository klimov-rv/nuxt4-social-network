export type Locale = 'ru' | 'en';

export interface I18nConfigShape {
  legacy?: boolean;
  locales: string[];
  messages: Record<string, Record<string, string | Record<string, any>>>;
}
