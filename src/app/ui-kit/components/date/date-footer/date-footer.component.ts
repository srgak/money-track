import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-date-footer',
  templateUrl: './date-footer.component.html',
  styleUrls: ['./date-footer.component.less']
})
export class DateFooterComponent implements OnInit {
  @Output() public onChange: EventEmitter<null> = new EventEmitter();

  public chooseDate(): void {
    this.onChange.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
