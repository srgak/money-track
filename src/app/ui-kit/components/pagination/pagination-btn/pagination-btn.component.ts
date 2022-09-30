import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationInfo } from 'src/app/ui-kit/models/models';

@Component({
  selector: 'ui-pagination-btn',
  templateUrl: './pagination-btn.component.html',
  styleUrls: ['./pagination-btn.component.less']
})
export class PaginationBtnComponent implements OnInit {
  @Input() active?: boolean;
  @Input() type: 'num' | 'extreme';
  @Input() content: number;
  @Output() onChange: EventEmitter<PaginationInfo> = new EventEmitter();

  public change(numPage: number): void {
    this.onChange.emit({
      type: this.type,
      num: numPage
    });
  }
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    
  }

}
