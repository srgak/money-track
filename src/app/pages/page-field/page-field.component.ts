import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-page-field',
  templateUrl: './page-field.component.html',
  styleUrls: ['./page-field.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFieldComponent implements OnInit {
  public percent: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public form: FormGroup = new FormGroup({
    control1: new FormControl(null, [Validators.required]),
    control2: new FormControl(null, [Validators.required]),
    fio: new FormControl(null)
  });

  private setPercent(percent: number): void {
    // console.log(total, currentValid);
    // const range = total / currentValid;
    // this.percent = percent;
    this.percent.next(percent);
  }

  public onDisable(): void {
    if(this.form.get('control2')?.enabled) {
      this.form.get('control2')?.disable();
    } else {
      this.form.get('control2')?.enable();
    }
    
  }

  constructor() { }

  ngOnInit(): void {
    this.form.get('fio')?.valueChanges.subscribe(console.log)
  }
}
