import { DEFAULT_LOCALE, isLocale, type Locale } from './config';
import { ui, type UIKey } from './ui';
import { localizedPath, type PageKey } from './routes';

/** Idioma a partir da URL do Astro (Astro.currentLocale já resolve, mas garantimos o tipo). */
export function getLocale(current: string | undefined): Locale {
  return current && isLocale(current) ? current : DEFAULT_LOCALE;
}

/** Tradutor: t('nav.contato'). Cai no PT se a chave faltar no idioma. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  };
}

/** Caminho de uma página no idioma atual (para links internos). */
export function pathTo(key: PageKey, locale: Locale): string {
  return localizedPath(key, locale);
}

export { localizedPath, translatePath, alternatesFor, getPageKeyFromPath } from './routes';
