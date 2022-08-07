import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-clock-panel',
  templateUrl: './clock-panel.component.html',
  styleUrls: ['./clock-panel.component.less']
})
export class ClockPanelComponent implements OnInit {
  @Input() valueList: string[][];
  @Output() onChangeValue: EventEmitter<string> = new EventEmitter();

  public chooseItem(value: string): void {
    this.onChangeValue.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
