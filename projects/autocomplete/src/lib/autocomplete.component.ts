import { Component, forwardRef, Input, OnInit } from '@angular/core';
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

  constructor(public data: AutocompleteService) { }

  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public reqLink: string;

  public startControl: FormControl = new FormControl();
  private onChange: Function;
  private onTouch: Function;
  public list: string[] = [];
  private searchChanges = new BehaviorSubject('');

  writeValue(value: string): void {
    this.startControl.setValue(value);
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  search(value: string) {
    this.searchChanges.next(value);
  }

  ngOnInit(): void {
    this.startControl.valueChanges
      .subscribe(val => {
        if(this.onChange) {
          this.onChange(val);
        }
      });

    this.searchChanges
      .asObservable()
      .pipe(
        debounceTime(300),
        map(val => val.toLowerCase())
      )
      .subscribe(val => {
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
      });
  }
}
