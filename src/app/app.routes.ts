import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Storepage } from './storepage/storepage';
import { OrderPage } from './orderpage/orders';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'store',
    component: Storepage,
  },
  { path: 'orders', component: OrderPage },
];
