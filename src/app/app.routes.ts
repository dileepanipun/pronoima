import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/pages/profile/profile.page').then( m => m.ProfilePage)
  },
];
