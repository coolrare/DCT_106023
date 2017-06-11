import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
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
