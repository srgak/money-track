import { Component, Input, OnInit } from '@angular/core';
import { DataClock } from 'src/app/models/interfaces';

@Component({
  selector: 'app-clock-circle',
  templateUrl: './clock-circle.component.html',
  styleUrls: ['./clock-circle.component.less']
})
export class ClockCircleComponent implements OnInit {
  @Input() public data: DataClock;

  constructor() { }

  ngOnInit(): void {
  }

}
