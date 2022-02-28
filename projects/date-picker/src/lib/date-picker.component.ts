import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-date-picker',
  templateUrl: './date-picker.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatePickerComponent)
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() placeholder: string;
  @Input() label: string;
  @Input() disabledDate;

  public startControl: FormControl = new FormControl();
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

  ngOnInit(): void {
    console.log(this.disabledDate);
    this.startControl.valueChanges.subscribe(val => {
      if(this.onChange) {
        this.onChange(val);
      }
    });
  }

}
