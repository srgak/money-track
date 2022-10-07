import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-dropdown-clock',
  templateUrl: './page-dropdown-clock.component.html',
  styleUrls: ['./page-dropdown-clock.component.less']
})
export class PageDropdownClockComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
