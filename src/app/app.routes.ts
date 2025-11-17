import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Storepage } from './storepage/storepage';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'store',
    component: Storepage,
  },
];
