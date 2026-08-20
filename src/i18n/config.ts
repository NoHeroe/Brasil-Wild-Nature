/** Idiomas do site. PT é o padrão (fica na raiz). */
export const LOCALES = ['pt', 'en', 'de', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt';

/** Rótulos do seletor de idioma. Nunca usar bandeira (idioma ≠ país). */
export const LOCALE_META: Record<Locale, { label: string; short: string; htmlLang: string; ogLocale: string }> = {
  pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  de: { label: 'Deutsch', short: 'DE', htmlLang: 'de', ogLocale: 'de_DE' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
