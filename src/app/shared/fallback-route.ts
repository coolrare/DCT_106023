import { Route } from '@angular/router';

export const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/page1',
  pathMatch: 'full'
};
