import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { finalize, interval, take } from 'rxjs';

@Component({
  selector: 'input-sms-code',
  templateUrl: './sms-code.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmsCodeComponent),
      multi: true
    }
  ]
})
export class SmsCodeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() public initTime: number;

  public testCode: string = '1111';
  public isShowBtn: boolean = false;
  public startControl: FormControl = new FormControl();
  public timeCount: number;
  private onChange: Function;
  private onTouch: Function;

  writeValue(value: string): void {
    this.startControl.setValue(value);
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  private startTimer(time: number) {
    this.timeCount = time;
    this.isShowBtn = true;
    interval(1000)
      .pipe(
        take(this.initTime),
        finalize(() => {
          this.isShowBtn = false;
        })
      )
      .subscribe(() => {
        this.timeCount--;
      });
  }

  public getCode() {
    //запрос на смс-код
    this.startTimer(this.initTime);
  }

  ngOnInit(): void {
    this.startTimer(this.initTime);
    this.startControl.valueChanges.subscribe(val => {
      if(this.onChange) {
        this.onChange(val);
      }
      if(val.length === 4) {
        //запрос на проверку кодв
        if(val === this.testCode) {
          console.log('правильно');
        } else {
          console.error('неправильный код');
        }
      }
    });
  }

}
