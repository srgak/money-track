import { Component, forwardRef, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  private onChange: Function;
  private onTouch: Function;
  private templateNameList;

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
    this.templateNameList = this.list.filter(item => item.otherBlock);
  }

  change(event: string) {
    if(this.templateList.length) {
      this.templateList.forEach(item => item.classList.add('d-none'));
      this.templateList[
        this.templateNameList.findIndex(item => item.value === event)
      ]?.classList.remove('d-none');
    }
    if(this.controlsGroup) {
      this.controlsGroup.reset();
    }
  }

}
