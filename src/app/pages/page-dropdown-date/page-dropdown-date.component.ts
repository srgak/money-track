import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-dropdown-date',
  templateUrl: './page-dropdown-date.component.html',
  styleUrls: ['./page-dropdown-date.component.less']
})
export class PageDropdownDateComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
