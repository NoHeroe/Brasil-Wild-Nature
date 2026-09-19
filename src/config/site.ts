/**
 * CONFIGURAÇÃO CENTRAL DO SITE — Brasil Wild Nature
 * ------------------------------------------------------------------
 * Ponto ÚNICO para dados de contato e identidade.
 * Para o cliente: é AQUI que você troca telefone, e-mail e redes.
 * Campos vazios ('') fazem o site esconder o botão/seção automaticamente.
 * ------------------------------------------------------------------
 */

export const site = {
  name: 'Brazil Wild Nature',
  /** Domínio final do site. */
  url: 'https://brazilwildjaguars.com',

  /** Local/base de operação (aparece no rodapé e no SEO). */
  region: 'Chapada dos Guimarães · Pantanal · Nobres — Mato Grosso, Brazil',

  contact: {
    /**
     * WhatsApp com código do país (só dígitos): 55 + DDD + número.
     * VALOR ATUAL = número achado numa avaliação pública do Google ("Gin 65999910685").
     * TODO(cliente): confirmar se é o número OFICIAL de atendimento e trocar se preciso.
     */
    whatsapp: '5565999910685',
    whatsappDisplay: '(65) 99991-0685',

    /** E-mail de contato. */
    email: 'brazilwildnature@gmail.com',

    /** TODO(cliente): @ do Instagram (só o usuário, sem @). Vazio = ícone some. */
    instagram: '',

    /** TODO(cliente): nº de cadastro CADASTUR, se houver. Vazio = selo some. */
    cadastur: '',
  },

  /** TODO(cliente): link de apoio (apoia.se). Vazio = seção "Apoie" some. */
  supportUrl: '',

  /** Crédito discreto no rodapé. */
  credit: { label: 'NoHeroes Studio', url: '' },
} as const;

export type SiteConfig = typeof site;
