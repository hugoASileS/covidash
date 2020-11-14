import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { NumberComponent } from './number/number.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'covid', component: CovidComponent },
      { path: 'chuck-norris', component: ChuckNorrisComponent },
      { path: 'number', component: NumberComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
