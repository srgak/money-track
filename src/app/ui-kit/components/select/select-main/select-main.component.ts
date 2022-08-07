import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ListItem, ListItemInfo } from '../../../models/models';
import { Dropdown } from '../../../scripts/dropdown';
import { SelectTagsComponent } from '../select-tags/select-tags.component';

@Component({
  selector: 'ui-select',
  templateUrl: './select-main.component.html',
  styleUrls: ['./select-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMainComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() public isMultiple?: boolean = false;
  @Input() public list: ListItem[];
  public readonly list$: BehaviorSubject<ListItem[]> = new BehaviorSubject([]);
  @ContentChild('input') private readonly inputRef: ElementRef;
  @ContentChild(FormControlName) private readonly formControl: FormControlName;
  @ViewChild(SelectTagsComponent) public selectTags: SelectTagsComponent;
  //поле
  private elInput: HTMLInputElement;
  private control: AbstractControl;
  private value: any | any[];
  //селект
  private elSelect: Element;
  private elSelectList: Element[];
  public dropdown: Dropdown;
  //список
  public listItem: ListItem = {
    label: null,
    value: null
  };
  private readonly subs: Subscription = new Subscription();

  constructor(
    private readonly renderer2: Renderer2, 
    private readonly elRef: ElementRef,
    private readonly cdr: ChangeDetectorRef
  ) { }

  //снять выбранный элемент
  private markItem(target: ListItem, add: boolean = true): void {
    const index = this.list.findIndex(item => item.value === target.value);
    if(add) {
      this.renderer2.addClass(this.elSelectList[index], 'active');
    } else {
      this.renderer2.removeClass(this.elSelectList[index], 'active');
    }
  }

  //инициализация входящих значений
  private initInputValue(value: any | any[]): void {
    const index = this.list.findIndex(item => item.value === value);
    const item = this.list[index];
    const el = this.elSelectList[index];
    this.changeItem({
      itemInfo: item,
      el: el
    });
  }

  //поменять элемент списка
  public changeItem(item: ListItemInfo): void {
    if(this.isMultiple) {
      this.selectTags.chooseMultipleItem(item.itemInfo, item.el.classList.contains('active'));
    } else {
      this.chooseSimpleItem(item.itemInfo);
    }
  };

  private chooseSimpleItem(val: ListItem): void {
    this.elSelectList.forEach((el: Element) => {
      this.renderer2.removeClass(el, 'active');
    });
    this.listItem = {...val};
    this.markItem(val);
    this.control.setValue(this.listItem.value);
  }

  ngOnInit(): void {
    if(this.list) {
      this.list$.next(this.list);
    }
  }

  ngAfterContentInit(): void {
    //присваивание
    this.elInput = this.inputRef.nativeElement;
    this.control = this.formControl.control;
    this.dropdown = new Dropdown(this.elInput, this.isMultiple ? '.field-list' : null);

    //рендеринг
    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.addClass(this.elInput, 'field__input_text-transparent');
    this.renderer2.setAttribute(this.elInput, 'readonly', 'readonly');
  }

  ngAfterViewInit(): void {
    this.elSelect = this.elRef.nativeElement.querySelector('.field-list');
    this.elSelectList = Array.from(this.elSelect.children);
    this.value = this.control.value;

    if(this.isMultiple) {
      this.subs.add(
        this.selectTags.onChangeValue.subscribe(val => {
          this.control.setValue(val);
        })
      );
      this.subs.add(
        this.selectTags.onMarkItem.subscribe(val => {
          this.markItem(val.item, val.add);
        })
      );
    }

    if(this.value) {
      if(Array.isArray(this.value)) {
        this.value.forEach(item => {
          this.initInputValue(item);
        });
      } else {
        this.initInputValue(this.value);
      }
      
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
