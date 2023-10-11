import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { NotFoundComponent } from './NotFound/not-found.component';
import { authenticationGuard, notAuthenticationGuard } from "@demo-micro-front/shared/auth";
import { WrapperComponent } from './test-wrapper/test-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'app-two',
    canActivate: [authenticationGuard],
    loadChildren: () =>
      loadRemoteModule('app-two', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'app-one',
    canActivate: [authenticationGuard],
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
    path: 'react-app',
    component: WrapperComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
