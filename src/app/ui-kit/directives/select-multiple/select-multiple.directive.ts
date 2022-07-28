import { Directive, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { ListItem, ListItemInfo } from '../../models/models';

@Directive({
  selector: '[uiSelectMultiple]'
})
export class SelectMultipleDirective implements OnInit {

  private control: AbstractControl;
  public readonly tagList: ListItem[] = [];
  public deletedEl: Element;
  public readonly onGetEl: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  constructor(
    private ngControl: NgControl,
    private renderer2: Renderer2
  ) { }

  //получить список значений для контрола
  private get valueList(): string[] {
    const arr = [];
    this.tagList.forEach(item => {
      arr.push(item.value);
    });

    return arr;
  }
  
  //получить элемент для удаления
  private getdeletedEl = (index: number): Element => {
    this.onGetEl.emit(this.tagList[index]);

    return this.deletedEl;
  };
  
  //удалить тег
  public deleteTag(index: number, el: Element = this.getdeletedEl(index)): void {
    this.tagList.splice(index, 1);
    this.renderer2.removeClass(el, 'active');
    this.control.setValue(this.tagList.length ? this.valueList : null);
  }

  //добавить тег
  public addTag(value: ListItemInfo): void {
    if(!value.el.classList.contains('active')) {
      this.tagList.push(value.itemInfo);
      this.control.setValue(this.valueList);
      this.renderer2.addClass(value.el, 'active');
    } else {
      const index = this.tagList.findIndex((item: ListItem) => item.value === value.itemInfo.value);
      this.deleteTag(index, value.el);
    }
  }

  ngOnInit(): void {
    this.control = this.ngControl.control;
  }

}
