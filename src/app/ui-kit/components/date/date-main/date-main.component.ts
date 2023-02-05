import { DatePipe } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, forwardRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateDay } from 'src/app/ui-kit/models/models';
import { UI_LANG } from 'src/app/ui-kit/models/ui-lang';
import { copyDate, DateExtra } from 'src/app/ui-kit/scripts/dateExtra';
import { Dropdown } from 'src/app/ui-kit/scripts/dropdown';
import { LocaleDateService } from 'src/app/ui-kit/services/locale-date.service';

@Component({
  selector: 'ui-date-main',
  templateUrl: './date-main.component.html',
  styleUrls: ['./date-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateMainComponent),
      multi: true
    },
    {
      provide: DatePipe
    }
  ]
})
export class DateMainComponent implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor {
  @ContentChild('input') private readonly inputRef!: ElementRef;
  @Input() public format?: string = 'dd.MM.yyyy';

  public viewNum: number = 1;
  private elInput!: HTMLInputElement;
  public dropdown!: Dropdown;
  public mainDate!: DateExtra;
  private savedDate!: Date;
  public dayList: DateDay[] = [];
  private dayCurrMonthList: DateDay[] = [];
  private dayPrevMonthList: DateDay[] = [];
  private dayNextMonthList: DateDay[] = [];
  public control: FormControl = new FormControl();
  private subs: Subscription = new Subscription();

  constructor(
    @Inject(UI_LANG) public readonly locale: string,
    public readonly localeData: LocaleDateService,
    private readonly renderer2: Renderer2,
    private readonly datePipe: DatePipe
  ) {}

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

  //сохранить дату
  private saveDate(): void {
    this.savedDate = new Date(+this.mainDate.year, +this.mainDate.month - 1, +this.mainDate.day);
  }

  //поменять день и задать дату в поле
  public changeDay(day?: number): void {
    this.mainDate.setDate(day || +this.mainDate.day);
    this.renderer2.setProperty(this.elInput, 'value', this.datePipe.transform(this.mainDate, this.format));
    this.control.setValue(this.mainDate);
    this.dropdown.activeFlag$.next(false);
    this.saveDate();
  }

  //полчуить день следующего месяца
  private getNextMonthDays(index: number): number {
    const date = copyDate(this.mainDate);

    date.nextMonth();
    date.setDate(index);

    return +date.day;
  }

  //получить день предыдущего месяца
  private getPrevMonthDay(index: number): number {
    const date = copyDate(this.mainDate);

    date.previousMonth();
    date.setDate(date.daysInMonth - (index - 1));

    return +date.day;
  }

  //получить дни предыдущего/текущего/следущего месяца
  private getDays(iteratorValue: number, period: 'prev' | 'curr'| 'next'): DateDay[] {
    const arr: DateDay[] = [];
    for(let i = 1; i <= iteratorValue; i++) {
      switch(period) {
        case 'prev':
          arr.push({
            value: this.getPrevMonthDay(i),
            disabled: true
          });
          break;
        case 'curr':
          arr.push({
            value: i,
            disabled: false,
            active: this.mainDate.isSame(this.savedDate) && i === this.savedDate.getDate()
          });
          break;
        case 'next':
          arr.push({
            value: this.getNextMonthDays(i),
            disabled: true
          });
          break;
      }
    }
    return period === 'prev' ? arr.reverse() : arr;
  }

  //задать сегодняшний день
  public setToday(): void {
    const date = new Date();
    this.mainDate.setFullYear(date.getFullYear());
    this.mainDate.setMonth(date.getMonth());
    this.mainDate.setDate(date.getDate());
    this.changeDay();
    this.renderDays();
  }

  //отрисовка дней
  public renderDays(): void {
    const date = copyDate(this.mainDate);

    this.dayCurrMonthList = this.getDays(this.mainDate.daysInMonth, 'curr');
    date.setDate(1);
    this.dayPrevMonthList = date.dayOfWeek > 1 ? this.getDays(date.dayOfWeek - 1, 'prev') : [];
    date.setDate(date.daysInMonth);
    this.dayNextMonthList = date.dayOfWeek < 7 ? this.getDays(7 - date.dayOfWeek, 'next') : [];

    this.dayList = [];
    this.dayList = this.dayList.concat(this.dayPrevMonthList).concat(this.dayCurrMonthList).concat(this.dayNextMonthList);
  }

  //инициализация
  private initDate(): void {
    this.mainDate = new DateExtra(this.control.value || new Date());
    this.mainDate.locale = this.locale;
    this.mainDate.resetTime();
    this.saveDate();
    this.renderDays();
  }

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.initDate();
    this.elInput = this.inputRef.nativeElement;
    this.dropdown = new Dropdown(this.elInput, '.field-calendar');

    this.renderer2.addClass(this.elInput, 'field__input');
    if(this.control.value) {
      setTimeout(() => {
        this.renderer2.setProperty(this.elInput, 'value', this.datePipe.transform(this.control.value, this.format));
      });
    }
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
