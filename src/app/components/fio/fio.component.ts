import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FioComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FioComponent implements OnInit, ControlValueAccessor {
  constructor() { }

  public fioControl: FormControl = new FormControl(null);
  public form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    patronomic: new FormControl(null, [Validators.required])
  });

  public isAloneField: boolean = true;
  private subs: Subscription = new Subscription();

  onTouched: () => void = () => {};
  onChange: (_: any) => void = (_: any) => {};

  writeValue(obj: any): void {
    const str = `${obj?.lastName || ''} ${obj?.firstName || ''} ${obj?.patronomic || ''}`.trim();

    this.fioControl.setValue(str, {
      onlySelf: true,
      emitEvent: false
    });
  }
  registerOnChange(fn: any): void {
    this.subs.add(
      this.form.valueChanges.subscribe(fn)
    );
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  public onBlurFio(): void {
    const arr = this.fioControl.value.split(' ');

    if(arr.length < 3) {
      this.isAloneField = false;
    }
  }

  ngOnInit(): void {
    this.subs.add(
      this.fioControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        const arr: string[] = value
          .split(' ')
          .filter((item: string) => !!item);

        if(arr.length >= 3) {
          console.log('отчество');
        } else if(arr.length >= 2) {
          console.log('имя');
        } else {
          console.log('фамилия');
        }
        this.form.patchValue({
          firstName: arr[1],
          lastName: arr[0],
          patronomic: arr.splice(2, arr.length).join(' ')
        });
      })
    );
    this.subs.add(
      this.form.get('lastName')?.valueChanges
        .pipe(
          debounceTime(500)
        )
        .subscribe(console.log)
    );
  }
}
