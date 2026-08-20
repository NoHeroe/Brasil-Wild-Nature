import type { ImageMetadata } from 'astro';
import heroOnca from '../assets/hero-onca.jpg';
import destinoPantanal from '../assets/destino-pantanal.jpg';
import destinoChapada from '../assets/destino-chapada.jpg';
import barco from '../assets/tours/barco.jpg';
import caminhao from '../assets/tours/caminhao.jpg';
import cavalo from '../assets/tours/cavalo.jpg';
import ayahuasca from '../assets/tours/ayahuasca.jpg';
import geronimo from '../assets/tours/geronimo.jpg';
import pedra from '../assets/tours/pedra.jpg';

/** Imagem de capa de cada passeio (por id). Sem entrada = cai na capa do destino. */
export const tourImages: Record<string, ImageMetadata> = {
  'safari-barco-oncas': destinoPantanal,
  'passeio-barco': barco,
  'safari-caminhao': caminhao,
  'cavalo': cavalo,
  'cavernas-lagoa-azul': destinoChapada,
  'morro-sao-jeronimo': geronimo,
  'cidade-pedra-vale-rio-claro': pedra,
  'ayahuasca': ayahuasca,
};

/** Capa (hero) de cada destino. Nobres ainda sem foto (placeholder). */
export const destinoHero: Record<string, ImageMetadata | undefined> = {
  pantanal: heroOnca,
  chapada: destinoChapada,
  nobres: undefined,
};
