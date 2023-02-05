import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateDay } from 'src/app/ui-kit/models/models';

@Component({
  selector: 'ui-date-body',
  templateUrl: './date-body.component.html',
  styleUrls: ['./date-body.component.less']
})
export class DateBodyComponent implements OnInit {
  @Input() public dayNameList!: string[];
  @Input() public dayList?: DateDay[];
  @Output() public onChangeDay: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public chooseDay(day: number): void {
    this.dayList?.forEach(item => item.active = false);
    if(this.dayList) {
      const day: any = this.dayList.find(item => item.value === day);
      day.active = true;
    }
    this.onChangeDay.emit(day);
  }

  ngOnInit(): void {
  }

}
