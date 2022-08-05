import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItem } from '../../models/models';

@Component({
  selector: 'ui-select-tags',
  templateUrl: './select-tags.component.html',
  styleUrls: ['./select-tags.component.less'],
})
export class SelectTagsComponent implements OnInit {

  public readonly tagList$: BehaviorSubject<ListItem[]> = new BehaviorSubject([]);
  public isActive: boolean = false;
  public readonly onChangeValue: EventEmitter<any[]> = new EventEmitter();
  public readonly onMarkItem: EventEmitter<{item: ListItem, add: boolean}> = new EventEmitter();

  constructor() { }

  //получить список значений для контрола
  private get valueList(): any[] {
    const arr = [];
    this.tagList$.value.forEach(item => {
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
    const arr = this.tagList$.value;
    const target = arr[index];
    arr.splice(index, 1);
    this.tagList$.next(arr);
    this.onChangeValue.emit(arr.length ? this.valueList : null);
    this.onMarkItem.emit({
      item: target,
      add: false
    });
    this.isActive = !!arr.length;
  }

  //добавить тег
  public chooseMultipleItem(val: ListItem, elContains: boolean): void {
    const arr = this.tagList$.value;

    if(elContains) {
      const index = arr.findIndex(item => item.value === val.value);
      arr.splice(index, 1);
    } else {
      arr.push(val);
    }
    this.tagList$.next(arr);
    this.onMarkItem.emit({
      item: val,
      add: !elContains
    });
    this.onChangeValue.emit(this.valueList);
  }

  ngOnInit(): void {
    
  }

}
