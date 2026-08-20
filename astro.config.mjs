// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domínio final: TODO(cliente) — trocar quando definir (ex.: brasilwildnature.com)
const SITE = 'https://brasilwildnature.com';

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en', de: 'de', es: 'es' },
      },
    }),
  ],
  // i18n nativo: PT na raiz, demais idiomas em /en /de /es
  i18n: {
    locales: ['pt', 'en', 'de', 'es'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    // qualidade/otimização via sharp (padrão do astro:assets)
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
