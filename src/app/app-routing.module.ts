import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { ClassicComponent } from './forms/classic/classic.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'forms/classic', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'forms/classic', component: ClassicComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
