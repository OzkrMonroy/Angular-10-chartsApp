import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent implements OnInit {
  providersData: ChartDataset<'bar', number[]>[] = [
    { data: [100, 200, 300, 400, 500], label: 'Seller A' },
    { data: [50, 250, 30, 450, 200], label: 'Seller B' },
  ];

  providersLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productData: ChartDataset<'bar', number[]>[] = [
    { data: [200, 300, 400, 300, 100], label: 'Cars', backgroundColor: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
