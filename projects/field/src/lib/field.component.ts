import { Component, forwardRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-field',
  templateUrl: './field.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ]
})
export class FieldComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() public placeholder: string;
  @Input() public mask: string;
  @Input() public label: string;
  @Input() public patterns;
  @Input() public maskSuffix: string = '';
  @Input() public maskThousand: string;
  @Input() public readonly: boolean;

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
    this.startControl.valueChanges.subscribe(val => {
      // console.log(val);
      if(this.onChange) {
        this.onChange(val);
      }
    });
  }

}
