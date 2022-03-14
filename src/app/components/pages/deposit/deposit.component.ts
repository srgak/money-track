import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Deposit } from 'src/app/data/interfaces';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.less']
})
export class DepositComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('chartEl') chartEl: ElementRef;

  public depositData: Deposit;
  public diagram: Chart;
  public isDetail: boolean = false;

  public outputPrice(price: string): void {
    const data: Deposit = JSON.parse(price);
    this.depositData = {...data};
    this.diagram.data.datasets.forEach(item => {
      item.data = [data.price, data.profit]
    });
    this.diagram.update();
  }

  ngAfterViewInit(): void {
    this.diagram = new Chart(this.chartEl.nativeElement, {
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
    });
  }

}
