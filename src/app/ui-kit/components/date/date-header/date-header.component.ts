import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateExtra } from 'src/app/ui-kit/scripts/dateExtra';

@Component({
  selector: 'ui-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.less']
})
export class DateHeaderComponent implements OnInit, DoCheck {
  @Input() public date: DateExtra;
  @Output() public onChange: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public changeYear(action: 'prev' | 'next' = 'prev'): void {
    switch(action) {
      case 'prev':
        this.date.previousYear();
        break;
      case 'next':
        this.date.nextYear();
        break;
    }
    this.onChange.emit();
  }

  public changeMonth(action: 'prev' | 'next' = 'prev'): void {
    switch(action) {
      case 'prev':
        this.date.previousMonth();
        break;
      case 'next':
        this.date.nextMonth();
        break;
    }
    this.onChange.emit();
  }

  ngOnInit(): void {
    
  }
  ngDoCheck(): void {
    // console.log(123);
  }

}
