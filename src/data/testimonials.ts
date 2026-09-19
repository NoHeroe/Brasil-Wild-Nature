import type { Locale } from '../i18n/config';

/**
 * Depoimentos REAIS de clientes (Google). Não inventar/editar o teor.
 * Original em português; traduções por idioma (mostradas com nota "traduzido do português").
 * Sobrenomes abreviados por privacidade.
 */
export interface Testimonial {
  author: string;
  text: Record<Locale, string>;
  source: 'Google';
  rating: 5;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Cybele F.',
    text: {
      pt: 'Experiência maravilhosa. O Gin é uma enciclopédia ambulante, com isso o passeio se torna muito muito especial. Vale muito a pena.',
      en: 'A wonderful experience. Gin is a walking encyclopedia, which makes the tour truly special. Well worth it.',
      de: 'Eine wunderbare Erfahrung. Gin ist ein wandelndes Lexikon, was die Tour wirklich besonders macht. Absolut lohnenswert.',
      es: 'Una experiencia maravillosa. Gin es una enciclopedia ambulante, lo que hace que el paseo sea muy especial. Vale mucho la pena.',
    },
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Monica A.',
    text: {
      pt: 'Ótima experiência. Fui muito bem recebida, guia profissional e profundo conhecedor da região. Prioriza a segurança, bem como a interação e conexão com a natureza. Certamente irei em outros passeios, e já indiquei para os amigos.',
      en: "A great experience. I was very well received — a professional guide with deep knowledge of the region. He puts safety first, along with interaction and connection with nature. I'll certainly join other tours, and I've already recommended him to friends.",
      de: 'Eine großartige Erfahrung. Ich wurde sehr herzlich empfangen — ein professioneller Guide mit tiefem Wissen über die Region. Sicherheit steht bei ihm an erster Stelle, ebenso das Erleben und die Verbindung zur Natur. Ich werde bestimmt weitere Touren machen und habe ihn Freunden bereits empfohlen.',
      es: 'Una gran experiencia. Me recibieron muy bien — un guía profesional y profundo conocedor de la región. Prioriza la seguridad, así como la interacción y conexión con la naturaleza. Sin duda haré otros paseos, y ya lo recomendé a mis amigos.',
    },
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Thiago R.',
    text: {
      pt: 'Nosso condutor foi atencioso e mostrou que conhece bem o circuito de caverna. Recomendo conhecer a região, pois é aventura inesquecível. Como sugestão, leve capacete e lanterna para explorar melhor os locais.',
      en: "Our guide was attentive and clearly knows the cave circuit well. I recommend visiting the region — it's an unforgettable adventure. A tip: bring a helmet and a flashlight to explore the sites better.",
      de: 'Unser Guide war aufmerksam und kennt den Höhlen-Rundweg offensichtlich gut. Ich empfehle, die Region zu besuchen — es ist ein unvergessliches Abenteuer. Ein Tipp: Helm und Taschenlampe mitnehmen, um die Orte besser zu erkunden.',
      es: 'Nuestro guía fue atento y demostró conocer bien el circuito de cuevas. Recomiendo conocer la región, pues es una aventura inolvidable. Como sugerencia, lleva casco y linterna para explorar mejor los lugares.',
    },
    source: 'Google',
    rating: 5,
  },
  {
    author: 'Liliane L.',
    text: {
      pt: 'A experiência incrível de caminhar nas cavernas. Pode ser realizada sem muita dificuldade. Almoço simples mas cheio de sabores de casa. Guia muito atencioso, generoso em nos passar seus conhecimentos de forma clara. Lugar lindo.',
      en: 'The incredible experience of walking through the caves. It can be done without much difficulty. A simple lunch, but full of homemade flavors. A very attentive guide, generous in sharing his knowledge clearly. A beautiful place.',
      de: 'Das unglaubliche Erlebnis, durch die Höhlen zu wandern. Es lässt sich ohne große Schwierigkeiten machen. Ein einfaches Mittagessen, aber voller hausgemachter Aromen. Ein sehr aufmerksamer Guide, großzügig darin, sein Wissen klar zu vermitteln. Ein wunderschöner Ort.',
      es: 'La increíble experiencia de caminar por las cuevas. Se puede realizar sin mucha dificultad. Un almuerzo sencillo, pero lleno de sabores caseros. Un guía muy atento, generoso al transmitir sus conocimientos con claridad. Un lugar hermoso.',
    },
    source: 'Google',
    rating: 5,
  },
  {
    author: 'George M.',
    text: {
      pt: 'Guia muito bom, com um vasto conhecimento, além de ser uma pessoa muito boa, recomendo!',
      en: 'A very good guide, with vast knowledge, and a really nice person too. Recommended!',
      de: 'Ein sehr guter Guide mit umfangreichem Wissen und dazu ein sehr netter Mensch. Empfehlenswert!',
      es: 'Un guía muy bueno, con un vasto conocimiento, además de ser muy buena persona. ¡Recomendado!',
    },
    source: 'Google',
    rating: 5,
  },
];
