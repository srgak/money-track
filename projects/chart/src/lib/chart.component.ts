import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'lib-chart',
  templateUrl: 'chart.component.html',
  styles: []
})
export class ChartComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('chartEl') chartEl: ElementRef;
  @Input() settings;

  private chart: Chart;
  public update() {
    this.chart.update();
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartEl.nativeElement, this.settings);
  }

}
