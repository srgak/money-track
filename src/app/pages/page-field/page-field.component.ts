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
    control2: new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {}
}
