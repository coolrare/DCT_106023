import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './charts/flot/flot.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  { path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
