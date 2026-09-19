// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domínio final do site.
const SITE = 'https://brazilwildjaguars.com';

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { pt: 'pt-BR', en: 'en', de: 'de', es: 'es' },
      },
    }),
  ],
  // i18n nativo: EN na raiz (padrão), demais idiomas em /pt /de /es
  i18n: {
    locales: ['en', 'pt', 'de', 'es'],
    defaultLocale: 'en',
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
