import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DashboardCountryDetailComponent} from './pages/dashboard-country-detail/dashboard-country-detail.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'country-detail-chart/:id',
    component: DashboardCountryDetailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
