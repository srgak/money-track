import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { debounceTime, map, Subject } from 'rxjs';
import { SelectMultipleDirective } from '../../directives/select-multiple/select-multiple.directive';
import { ListItem, ListItemInfo } from '../../models/models';
import { SelectItemComponent } from '../select-item/select-item.component';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})
export class SelectComponent implements OnInit, AfterContentInit {

  @ContentChildren(SelectItemComponent) private readonly selectComList: QueryList<SelectItemComponent>;
  @ContentChild('input') private readonly inputRef: ElementRef;
  @ContentChild(FormControlName) private readonly formControl: FormControlName;
  @ContentChild(SelectMultipleDirective) public readonly multiple: SelectMultipleDirective;
  //поле
  private elInput: HTMLInputElement;
  private control: AbstractControl;
  private value: string | string[];
  //селект
  private elSelect: Element;
  private elSelectList: Element[];
  private isActiveSelect: boolean = false;
  //список
  private readonly initList$: Subject<ListItem> = new Subject();
  private readonly list: ListItem[] = [];
  public listItem: ListItem = {
    label: null,
    value: null
  };

  constructor(
    private readonly renderer2: Renderer2, 
    private readonly elRef: ElementRef
  ) { }

  //выброр элемента
  private chooseItem(val: ListItemInfo): void {
    if(val.itemInfo && val.el) {
      if(this.multiple) {
        this.multiple.addTag(val);
      } else {
        this.changeItem(val);
      }
    } else {
      this.control.setValue(null);
    }
  }

  //поменять элемент списка
  private changeItem(value: ListItemInfo | null = null): void {
    this.elSelectList.forEach((el: Element) => {
      this.renderer2.removeClass(el, 'active');
    });
    if(value) {
      this.listItem = {...value.itemInfo};
      this.control.setValue(this.listItem.value);
      this.renderer2.addClass(value.el, 'active');
    } else {
      this.listItem = {
        label: null, 
        value: null
      };

    }
  }

  ngOnInit(): void {
    this.initList$.pipe(
      map((item: ListItem) => {
        this.list.push(item);

        return this.list;
      }),
      debounceTime(100)
    ).subscribe((list: ListItem[]) => {
      if (this.value) {
        const arr = !Array.isArray(this.value) ? this.value.split('') : this.value;
        arr.forEach(valItem => {
          const index = list.findIndex((item: ListItem) => item.value === valItem.toString());
          const item = list[index];
          this.chooseItem({
            itemInfo: item,
            el: this.elSelectList[index]
          });
        });
      }
    });
  }

  ngAfterContentInit(): void {
    //присваивание
    this.elInput = this.inputRef.nativeElement;
    this.control = this.formControl.control;
    this.elSelect = this.elRef.nativeElement.querySelector('.field-list');
    this.elSelectList = Array.from(this.elSelect.children);
    if(Array.isArray(this.control.value)) {
      this.value = this.control.value;
    } else {
      this.value = this.control.value ? this.control.value.toString() : '';
    }

    //рендеринг
    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.addClass(this.elInput, 'field__input_text-transparent');
    this.renderer2.setAttribute(this.elInput, 'readonly', 'readonly');
    this.elSelectList.forEach(item => {
      this.renderer2.addClass(item, 'field-list__item');
    });

    //подписка на события
    this.renderer2.listen(this.elInput, 'click', () => {
      this.isActiveSelect = !this.isActiveSelect;
      if(this.isActiveSelect) {
        this.renderer2.addClass(this.elSelect, 'active');
      } else {
        this.renderer2.removeClass(this.elSelect, 'active');
        this.elInput.blur();
      }
    });
    this.renderer2.listen(this.elInput, 'blur', () => {
      this.isActiveSelect = false;
      this.renderer2.removeClass(this.elSelect, 'active');
    });
    this.selectComList.forEach((component: SelectItemComponent) => {
      this.initList$.next(component.item);
      component.onChangeItem.subscribe((val: ListItemInfo) => {
        this.chooseItem(val);
      });
    });
    if(this.multiple) {
      this.multiple.onGetEl.subscribe((val: ListItem) => {
        const index = this.list.findIndex((item: ListItem) => item.value === val.value);
        this.multiple.deletedEl = this.elSelectList[index];
      });
    }
    this.control.valueChanges.subscribe(val => {
      if(!val) this.changeItem();
    });
  }
}
