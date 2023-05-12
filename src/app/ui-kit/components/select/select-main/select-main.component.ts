import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, forwardRef, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
export class SelectMainComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() public list!: ListItem[];
  @ContentChild('input', {static: true}) private inputRef!: ElementRef;
  @HostListener('document:click', ['$event']) private clickOutside(event: PointerEvent): void {
    const target = event.target as HTMLElement;
    const isClosest = !!target.closest(this.elInput.tagName) || !!target.closest('.field-list');

    if(!isClosest) {
      this.isShowList.next(false);
    }
  }
  //поле
  private elInput!: HTMLInputElement;
  private control: FormControl = new FormControl();
  private value: any | any[];
  //селект
  public isShowList: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private elSelect!: Element;
  private elSelectList!: NodeListOf<Element>;
  // public dropdown!: Dropdown;
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

  public selectItem(item: ListItem): void {
    this.control.setValue(item);
    this.elInput.value = item.label;
    this.isShowList.next(false);
  }

  ngOnInit(): void {
    this.elInput = this.inputRef.nativeElement;
    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.listen(this.elInput, 'focus', () => {
      this.isShowList.next(true);
    });
    this.subs.add(
      this.isShowList
        .subscribe(value => {
          if(value) {
            console.log(value);
            // this.elSelect = this.elRef.nativeElement.querySelector('.field-list');
            // console.log(this.elRef.nativeElement.querySelector('.field-list'));
            // this.elSelectList = this.elSelect.querySelectorAll('.field-list__item');
            // Array.from(this.elSelectList).forEach((item: Element) => {
            //   console.log((item as HTMLElement).innerHTML);
            // });
          }
        })
    );
  }
  ngAfterViewInit(): void {
    if(this.control.value) {
      const value = this.control.value.label;

      this.elInput.value = value;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
