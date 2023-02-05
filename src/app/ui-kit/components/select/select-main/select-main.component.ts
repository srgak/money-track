import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, forwardRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ListItem, ListItemInfo } from '../../../models/models';
import { Dropdown } from '../../../scripts/dropdown';
import { SelectTagsComponent } from '../select-tags/select-tags.component';

@Component({
  selector: 'ui-select',
  templateUrl: './select-main.component.html',
  styleUrls: ['./select-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMainComponent),
      multi: true
    }
  ]
})
export class SelectMainComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  @Input() public isMultiple?: boolean = false;
  @Input() public list!: ListItem[];
  public readonly list$: BehaviorSubject<ListItem[] | null> = new BehaviorSubject<ListItem[] | null>(null);
  @ContentChild('input') private readonly inputRef!: ElementRef;
  @ViewChild(SelectTagsComponent) public selectTags!: SelectTagsComponent;
  //поле
  private elInput!: HTMLInputElement;
  private control: FormControl = new FormControl();
  private value: any | any[];
  //селект
  private elSelect!: Element;
  private elSelectList!: Element[];
  public dropdown!: Dropdown;
  private readonly subs: Subscription = new Subscription();

  constructor(
    private readonly renderer2: Renderer2, 
    private readonly elRef: ElementRef
  ) { }

  private onTouched:() => void = () => {};
  private onChange:(_: any) => void = (_:any) => {};

  public updateChanges(value: any) {
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.subs.add(this.control.valueChanges.subscribe(fn));
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.control.setValue(value);
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

  //задать элемент
  public setItem(item: ListItemInfo): void {
    this.control.setValue(item.itemInfo.value);
    this.changeItem(item);
  }

  //поменять элемент списка
  private changeItem(item: ListItemInfo): void {
    if(this.isMultiple) {
      this.selectTags.chooseMultipleItem(item.itemInfo, item.el.classList.contains('active'));
    } else {
      this.elSelectList.forEach((el: Element) => {
        this.renderer2.removeClass(el, 'active');
      });
      this.renderer2.setProperty(this.elInput, 'value', item.itemInfo.label);
      this.markItem(item.itemInfo);
    }
  };

  //снять выбранный элемент
  public markItem(target: ListItem, add: boolean = true): void {
    const index = this.list.findIndex(item => item.value === target.value);
    if(add) {
      this.renderer2.addClass(this.elSelectList[index], 'active');
    } else {
      this.renderer2.removeClass(this.elSelectList[index], 'active');
    }
  }

  ngOnInit(): void {
    if(this.list) {
      this.list$.next(this.list);
    }
  }

  ngAfterContentInit(): void {
    //присваивание
    this.elInput = this.inputRef.nativeElement;
    this.dropdown = new Dropdown(this.elInput, this.isMultiple ? '.field-list' : '');

    //рендеринг
    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.setAttribute(this.elInput, 'readonly', 'readonly');
  }

  ngAfterViewInit(): void {
    this.elSelect = this.elRef.nativeElement.querySelector('.field-list');
    this.elSelectList = Array.from(this.elSelect.children);
    this.value = this.control.value;

    if(this.isMultiple) {
      this.subs.add(
        this.selectTags.onChangeValue.subscribe(val => {
          this.control.setValue(val || null);
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
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
