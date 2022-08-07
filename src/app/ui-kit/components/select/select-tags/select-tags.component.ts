import { Component, EventEmitter, OnInit } from '@angular/core';
import { ListItem } from '../../../models/models';

@Component({
  selector: 'ui-select-tags',
  templateUrl: './select-tags.component.html',
  styleUrls: ['./select-tags.component.less'],
})
export class SelectTagsComponent implements OnInit {

  public readonly tagList: ListItem[] = [];
  public isActive: boolean = false;
  public readonly onChangeValue: EventEmitter<any[]> = new EventEmitter();
  public readonly onMarkItem: EventEmitter<{item: ListItem, add: boolean}> = new EventEmitter();

  constructor() { }

  //получить список значений для контрола
  private get valueList(): any[] {
    const arr = [];
    this.tagList.forEach(item => {
      arr.push(item.value);
    });

    return arr;
  }

  public showTagList(event): void {
    if(!event.target.classList.contains('field-tag__close')) {      
      this.isActive = !this.isActive;
    }
  }

  //удалить тег
  public deleteTag(index: number): void {
    const target = this.tagList[index];
    this.tagList.splice(index, 1);
    this.onChangeValue.emit(this.tagList.length ? this.valueList : null);
    this.onMarkItem.emit({
      item: target,
      add: false
    });
    this.isActive = !!this.tagList.length;
  }

  //добавить тег
  public chooseMultipleItem(val: ListItem, elContains: boolean): void {
    if(elContains) {
      const index = this.tagList.findIndex(item => item.value === val.value);
      this.tagList.splice(index, 1);
    } else {
      this.tagList.push(val);
    }
    this.onMarkItem.emit({
      item: val,
      add: !elContains
    });
    this.onChangeValue.emit(this.valueList);
  }

  ngOnInit(): void {
    
  }

}
