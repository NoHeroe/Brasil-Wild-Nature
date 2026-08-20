import { LOCALES, DEFAULT_LOCALE, isLocale, type Locale } from './config';

/**
 * Registro de rotas: cada página tem um `slug` por idioma.
 * '' = raiz do idioma (home). Nomes de lugar (pantanal/chapada/nobres) não se
 * traduzem; páginas utilitárias sim. Isso permite ao seletor de idioma manter
 * a MESMA página ao trocar de idioma (Pantanal PT → Pantanal DE, não a home).
 */
export type PageKey =
  | 'home' | 'pantanal' | 'chapada' | 'nobres' | 'sobre' | 'galeria' | 'contato';

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home:     { pt: '',        en: '',        de: '',          es: '' },
  pantanal: { pt: 'pantanal', en: 'pantanal', de: 'pantanal', es: 'pantanal' },
  chapada:  { pt: 'chapada',  en: 'chapada',  de: 'chapada',  es: 'chapada' },
  nobres:   { pt: 'nobres',   en: 'nobres',   de: 'nobres',   es: 'nobres' },
  sobre:    { pt: 'sobre',    en: 'sobre',    de: 'sobre',    es: 'sobre' },
  galeria:  { pt: 'galeria',  en: 'galeria',  de: 'galeria',  es: 'galeria' },
  contato:  { pt: 'contato',  en: 'contato',  de: 'contato',  es: 'contato' },
};

export const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];

/** Caminho absoluto (com barra final) de uma página em um idioma. */
export function localizedPath(key: PageKey, locale: Locale): string {
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const slug = ROUTES[key][locale];
  return slug ? `${base}/${slug}/` : `${base}/`;
}

/** Normaliza para sempre terminar com uma única barra. */
function withSlash(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path = path + '/';
  return path.replace(/\/{2,}/g, '/');
}

/** Descobre o idioma a partir do caminho (prefixo /en /de /es; senão PT). */
export function getLocaleFromPath(path: string): Locale {
  const seg = withSlash(path).split('/')[1];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/** Descobre a PageKey atual a partir do caminho. */
export function getPageKeyFromPath(path: string): PageKey | null {
  const p = withSlash(path);
  const locale = getLocaleFromPath(p);
  for (const key of PAGE_KEYS) {
    if (withSlash(localizedPath(key, locale)) === p) return key;
  }
  return null;
}

/**
 * Traduz o caminho atual para outro idioma MANTENDO a página.
 * Se não reconhecer a página, cai na raiz do idioma alvo.
 */
export function translatePath(currentPath: string, target: Locale): string {
  const key = getPageKeyFromPath(currentPath);
  return key ? localizedPath(key, target) : localizedPath('home', target);
}

/** Alternativas para hreflang (todas as línguas + x-default = PT). */
export function alternatesFor(key: PageKey, siteUrl: string): { hreflang: string; href: string }[] {
  const base = siteUrl.replace(/\/$/, '');
  const list = LOCALES.map((loc) => ({
    hreflang: loc === 'pt' ? 'pt-BR' : loc,
    href: base + localizedPath(key, loc),
  }));
  list.push({ hreflang: 'x-default', href: base + localizedPath(key, DEFAULT_LOCALE) });
  return list;
}
