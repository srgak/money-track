import { Component, forwardRef, Input, OnInit, EventEmitter} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-select',
  templateUrl: './select.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public list;
  
  public startControl: FormControl = new FormControl();
  private onChange: Function;
  private onTouch: Function;
  public isShow: boolean;

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
      if(this.onChange) {
        this.onChange(val);
      }
    });
  }

  change(event: string) {
    if(event === 'other') {
      console.log(event);
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
