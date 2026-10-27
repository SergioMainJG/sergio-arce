import { Routes } from '@angular/router';
import { Home } from './home/pages/home/home';
import Story from './story/pages/story/story';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'story',
    loadComponent: () => Story,
  },
];
