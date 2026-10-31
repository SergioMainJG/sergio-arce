import type { Media } from '~interfaces/media';
import devtalles from '~assets/images/podcasts/devtalles.avif';
import lapension from '~assets/images/podcasts/lapension.avif';

export const podcasts: Media[] = [
  {
    title: 'DevTalles',
    description: {
      es: 'Contenido de desarrollo de software, creado y producido por Fernando Herrera .',
      en: 'Software development content, created and produced by Fernando Herrera.',
    },
    src: devtalles,
    link: 'https://music.youtube.com/watch?v=NdP1hcn_pCs&si=YArTG1KVxxaEOjiW',
  },
  {
    title: 'La Pensión',
    description: {
      es: 'Anecdotas y ocurrencias de cualquier tema, creado y producido por Fedelobo, Criss Martel, y Quenel Ra.',
      en: 'Anecdotes and musings about any topic, created and produced by Fedelobo, Criss Martel, and Quenel Ra.',
    },
    src: lapension,
    link: 'https://music.youtube.com/watch?v=ozCZWuf1Bvk&si=jjf6EIlqZP8vPcqj',
  },
];
