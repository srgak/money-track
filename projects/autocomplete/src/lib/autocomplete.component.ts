import { Component, ElementRef, forwardRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, debounceTime, map, of, switchMap } from 'rxjs';
import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'input-autocomplete',
  templateUrl: './autocomplete.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {

  constructor(public data: AutocompleteService, private el: ElementRef) { }

  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public reqLink: string;
  @Input() public lang: string;
  @Input() public isOnlySelect: boolean = false;

  public startControl: FormControl = new FormControl();
  public list: string[] = [];
  private onChange: Function;
  private onTouch: Function;
  private saved: string = '';

  public saveValue(value) {
    this.saved = value;
    this.list = [];
  }
  blur() {
    if(this.isOnlySelect && this.startControl.value !== this.saved) 
      this.startControl.reset();
  }

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
    this.startControl.valueChanges
      .pipe(
        debounceTime(300),
        map(val => !val ? '' : val),
        map(val => val.toLowerCase())
      )
      .subscribe(val => {
        if(this.onChange) {
          this.onChange(val);
        }
        if(val !== this.saved.toLowerCase()) {
          this.data
            .getSortedNames(this.reqLink, val)
            .subscribe({
              next: val => {
                this.data.isLoading = false;
                this.list = val;
              },
              error: () => {
                this.data.isError = true;
              }
            });
        }
      });
  }
}
