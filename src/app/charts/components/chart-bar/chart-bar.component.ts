import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [
  ]
})
export class ChartBarComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() labels: string[] = [];
  @Input() datasets: ChartDataset<"bar", number[]>[] = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
    this.barChartData.labels = this.labels;
    this.barChartData.datasets = this.datasets;
  }

}
