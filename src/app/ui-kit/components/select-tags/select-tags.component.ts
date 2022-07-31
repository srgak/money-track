import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem, ListItemInfo } from '../../models/models';

@Component({
  selector: 'ui-select-tags',
  templateUrl: './select-tags.component.html',
  styleUrls: ['./select-tags.component.less']
})
export class SelectTagsComponent implements OnInit {

  public readonly tagList: ListItem[] = [];
  private el: Element;
  private elTagList: Element;
  public isActive: boolean = false;
  public readonly onDeleteTag$: Subject<ListItem> = new Subject<ListItem>();
  public readonly onUpdateValue$: Subject<string[] | null> = new Subject<string[] | null>();

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2
  ) {
    this.el = elRef.nativeElement;
  }

  //получить список значений для контрола
  private get valueList(): string[] {
    const arr = [];
    this.tagList.forEach(item => {
      arr.push(item.value);
    });

    return arr;
  }

  public showTagList(event): void {
    if(!event.target.classList.contains('field-tag__close')) {      
      this.isActive = !this.isActive;
      if(this.isActive) {
        this.renderer2.addClass(this.elTagList, 'active');
      } else {
        this.renderer2.removeClass(this.elTagList, 'active');
      }
    }
  }

  //удалить тег
  public deleteTag(index: number): void {
    this.onDeleteTag$.next(this.tagList[index]);
    this.tagList.splice(index, 1);
    this.onUpdateValue$.next(this.tagList.length ? this.valueList : null);
    if(!this.tagList.length) this.renderer2.removeClass(this.elTagList, 'active');
  }

  //добавить тег
  public addTag(value: ListItemInfo): void {
    if(!value.el.classList.contains('active')) {
      this.tagList.push(value.itemInfo);
      this.onUpdateValue$.next(this.valueList);
      this.renderer2.addClass(value.el, 'active');
    } else {
      const index = this.tagList.findIndex((item: ListItem) => item.value === value.itemInfo.value);
      this.deleteTag(index);
    }
  }

  ngOnInit(): void {
    this.elTagList = this.el.querySelector('.field-tag');
  }

}
