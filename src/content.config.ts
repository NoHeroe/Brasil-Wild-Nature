import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleção de PASSEIOS. Cada passeio é um Markdown em src/content/tours/<idioma>/<slug>.md
 * Para adicionar um passeio: copie um arquivo existente, troque o front-matter e o texto.
 * `confirm: true` = detalhes ainda não confirmados pelo cliente (aparecem marcados no site).
 */
const tours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tours' }),
  schema: z.object({
    locale: z.enum(['pt', 'en', 'de', 'es']),
    destino: z.enum(['pantanal', 'chapada', 'nobres']),
    tour: z.string(), // id estável do passeio (igual em todos os idiomas)
    title: z.string(),
    summary: z.string(),
    premium: z.boolean().default(false),
    order: z.number().default(0),

    duration: z.string().optional(),
    effort: z.string().optional(),
    meeting: z.string().optional(),
    season: z.string().optional(),
    seasonMonths: z.array(z.number()).optional(), // 1..12 (destaque na barra)

    includes: z.array(z.string()).default([]),
    excludes: z.array(z.string()).default([]),
    bring: z.array(z.string()).default([]),
    species: z.array(z.string()).default([]),

    notice: z.string().optional(), // aviso especial (ex.: triagem do ayahuasca)
    confirm: z.boolean().default(true),
  }),
});

export const collections = { tours };
