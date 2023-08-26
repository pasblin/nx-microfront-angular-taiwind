import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { NotFoundComponent } from './NotFound/not-found.component';

export const appRoutes: Route[] = [
  {
    path: 'app-two',
    loadChildren: () =>
      loadRemoteModule('app-two', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'app-one',
    loadChildren: () =>
      loadRemoteModule('app-one', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    canActivate: [authenticationGuard],
    loadChildren: () =>
      loadRemoteModule('dashboard', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    canActivate: [notAuthenticationGuard],
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
