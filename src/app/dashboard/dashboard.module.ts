import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CovidComponent } from './covid/covid.component';
import { NumberComponent } from './number/number.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';


@NgModule({
  declarations: [DashboardComponent, CovidComponent, NumberComponent, ChuckNorrisComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
