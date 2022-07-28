import { Component, ElementRef, Input, OnInit, EventEmitter } from '@angular/core';
import { ListItem, ListItemInfo } from '../../models/models';

@Component({
  selector: 'ui-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.less']
})
export class SelectItemComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  @Input() public value: string | number;
  @Input() public label: string;
  public readonly onChangeItem: EventEmitter<ListItemInfo> = new EventEmitter<ListItemInfo>();

  public itemEl: Element = this.elRef.nativeElement;
  public item: ListItem;

  public chooseItem(): void {
    this.onChangeItem.emit({
      itemInfo: this.item,
      el: this.itemEl
    });
  }

  ngOnInit(): void {
    this.value = this.value.toString();
    this.item = {
      value: this.value,
      label: this.label
    };
  }

}
