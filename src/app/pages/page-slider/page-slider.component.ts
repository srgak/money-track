import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-slider',
  templateUrl: './page-slider.component.html',
  styleUrls: ['./page-slider.component.less']
})
export class PageSliderComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(500000)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
