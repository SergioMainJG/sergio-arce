import type { Movie } from '~interfaces/movie';
import img28years from '~assets/images/movies/28years.avif';
import deathnote from '~assets/images/movies/deathnote.avif';
import godzilla from '~assets/images/movies/godzilla.avif';
import house from '~assets/images/movies/house.avif';
import johnwick4 from '~assets/images/movies/johnwick4.avif';
import moonknight from '~assets/images/movies/moonknight.avif';
import shawshank from '~assets/images/movies/shawshank.avif';
import thebatman from '~assets/images/movies/thebatman.avif';
import superman from '~assets/images/movies/superman.avif';

export const movies: Movie[] = [
  { src: img28years, alt: '28 years later' },
  { src: deathnote, alt: 'Death Note' },
  { src: godzilla, alt: 'Godzilla Minus One' },
  { src: house, alt: 'Dr. House' },
  { src: johnwick4, alt: 'John Wick' },
  { src: moonknight, alt: 'Moon Knight' },
  { src: shawshank, alt: 'Shawshank Redemption' },
  { src: thebatman, alt: 'The Batman' },
  { src: superman, alt: 'Superman' },
];
