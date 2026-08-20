/**
 * Depoimentos REAIS de clientes (Google). Não inventar/editar o teor.
 * Texto original em português; exibido assim em todos os idiomas (autêntico).
 * Sobrenomes abreviados por privacidade.
 */
export interface Testimonial {
  author: string;
  text: string;
  source: 'Google';
  rating: 5;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Cybele F.',
    text: 'Experiência maravilhosa. O Gin é uma enciclopédia ambulante, com isso o passeio se torna muito muito especial. Vale muito a pena.',
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Monica A.',
    text: 'Ótima experiência. Fui muito bem recebida, guia profissional e profundo conhecedor da região. Prioriza a segurança, bem como a interação e conexão com a natureza. Certamente irei em outros passeios, e já indiquei para os amigos.',
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Thiago R.',
    text: 'Nosso condutor foi atencioso e mostrou que conhece bem o circuito de caverna. Recomendo conhecer a região, pois é aventura inesquecível. Como sugestão, leve capacete e lanterna para explorar melhor os locais.',
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Liliane L.',
    text: 'A experiência incrível de caminhar nas cavernas. Pode ser realizada sem muita dificuldade. Almoço simples mas cheio de sabores de casa. Guia muito atencioso, generoso em nos passar seus conhecimentos de forma clara. Lugar lindo.',
    source: 'Google',
    rating: 5,
  },
  {
    author: 'George M.',
    text: 'Guia muito bom, com um vasto conhecimento, além de ser uma pessoa muito boa, recomendo!',
    source: 'Google',
    rating: 5,
  },
];
