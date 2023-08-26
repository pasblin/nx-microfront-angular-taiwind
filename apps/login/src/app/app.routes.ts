import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./login/entry.routes').then((m) => m.remoteRoutes),
  },
];
