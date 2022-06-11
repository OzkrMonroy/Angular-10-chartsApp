import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DoughnutComponent,
    DoughnutHttpComponent,
    ChartBarComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})
export class ChartsModule { }
