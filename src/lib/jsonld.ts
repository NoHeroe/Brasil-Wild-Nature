import { site } from '../config/site';
import { instagramLink } from './links';

/** Dados estruturados — SOMENTE dados reais. Nada de nota/preço/avaliação inventados. */

const AREA = ['Pantanal', 'Chapada dos Guimarães', 'Nobres', 'Mato Grosso, Brasil'];
const LANGS = ['Portuguese', 'English', 'German', 'Spanish'];

export function organizationLd() {
  const sameAs: string[] = [];
  const ig = instagramLink();
  if (ig) sameAs.push(ig);

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.name,
    url: site.url,
    areaServed: AREA,
    availableLanguage: LANGS,
    knowsLanguage: LANGS,
  };
  if (site.contact.whatsapp) {
    data.contactPoint = {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: '+' + site.contact.whatsapp.replace(/\D/g, ''),
      availableLanguage: ['pt', 'en', 'de', 'es'],
    };
  }
  if (sameAs.length) data.sameAs = sameAs;
  return data;
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: ['pt-BR', 'en', 'de', 'es'],
  };
}

export function touristDestinationLd(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    touristType: ['Ecotourism', 'Wildlife', 'Nature'],
  };
}
