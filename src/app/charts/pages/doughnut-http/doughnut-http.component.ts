import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {
  public loading: boolean = true;
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private service: ChartsService) { }

  ngOnInit(): void {
    this.service.getUsersToDoughnut().subscribe({
      next: ({ labels, datasets }) => {
        this.loading = false;
        
        this.doughnutChartLabels = [...labels];
        this.doughnutChartData.labels = [...labels];
        this.doughnutChartData.datasets.push({data: datasets})
      }
    })
  }

}
