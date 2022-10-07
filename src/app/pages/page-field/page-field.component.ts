import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-field',
  templateUrl: './page-field.component.html',
  styleUrls: ['./page-field.component.less']
})
export class PageFieldComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(null),
    control2: new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
