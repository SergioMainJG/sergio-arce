import { Component } from '@angular/core';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

interface Movies {
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'my-movies-shows',
  imports: [NgOptimizedImage],
  templateUrl: './my-movies-shows.html',
})
export class MyMoviesShows {
  movies: Movies[] = [
    { id: 1, src: '/assets/images/28years.avif', alt: '28 years later' },
    { id: 2, src: '/assets/images/deathnote.avif', alt: 'Death Note' },
    { id: 3, src: '/assets/images/godzilla.avif', alt: 'Godzilla Minus One' },
    { id: 4, src: '/assets/images/house.avif', alt: 'Dr. House' },
    { id: 5, src: '/assets/images/johnwick4.avif', alt: 'John Wick' },
    { id: 6, src: '/assets/images/moonknight.avif', alt: 'Moon Knight' },
    { id: 7, src: '/assets/images/shawshank.avif', alt: 'Shawshank Redemption' },
    { id: 8, src: '/assets/images/thebatman.avif', alt: 'The Batman' },
    { id: 9, src: '/assets/images/superman.avif', alt: 'Superman' },
  ];
}
