import { Component, ViewChild } from '@angular/core';
import { Deposit } from 'src/app/data/interfaces';
import { ChartComponent } from 'dist/chart';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.less']
})
export class DepositComponent {

  constructor() { }

  @ViewChild('chart', { static: false }) chart: ChartComponent;

  public depositData: Deposit;
  public isDetail: boolean = false;
  public chartSettings = {
    type: 'doughnut',
    data: {
      labels: ['Вклад', 'Проценты'],
      datasets: [{
        data: [],
        backgroundColor: [
          '#133840',
          '#F22738'
        ],
        borderColor: [
          '#8FBBC4'
        ]
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: 130
    }
  };

  public outputPrice(price: string): void {
    const data: Deposit = JSON.parse(price);
    this.depositData = {...data};
    this.chartSettings.data.datasets.forEach(item => {
      item.data = [data.price, data.profit]
    });
    this.chart.update();
  }

}
