import { Component, forwardRef, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

interface ListItem {
  name: string;
  value: string;
  otherBlock?: string;
};
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
  @Input() public controlsGroup: AbstractControl;
  @Input() public templateList: Element[] = [];
  
  public startControl: FormControl = new FormControl();
  public isStringList: boolean;
  private onChange: Function;
  private onTouch: Function;
  private templateIndexList;

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
    this.isStringList = this.list.every(item => typeof item === 'string');
    this.startControl.valueChanges.subscribe(val => {
      if(this.onChange) {
        this.onChange(val);
      }
    });
    this.templateIndexList = this.list.filter(item => item.otherBlock);
  }

  change(event: string) {
    if(this.templateList.length) {
      this.templateList.forEach(item => item.classList.add('d-none'));
      this.templateList[
        this.templateIndexList.findIndex(item => item.value === event)
      ]?.classList.remove('d-none');
    }
    if(this.controlsGroup) {
      this.controlsGroup.reset();
    }
  }

}
