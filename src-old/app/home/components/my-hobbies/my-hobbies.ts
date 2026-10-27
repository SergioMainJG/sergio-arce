import { Component } from '@angular/core';
import { MyMusic } from './my-music/my-music';
import { MyPodcasts } from './my-podcasts/my-podcasts';
import { MySports } from './my-sports/my-sports';
import { MyMoviesShows } from './my-movies-shows/my-movies-shows';

@Component({
  selector: 'my-hobbies',
  imports: [MyMusic, MyPodcasts, MySports, MyMoviesShows],
  templateUrl: './my-hobbies.html',
})
export class MyHobbies {}
