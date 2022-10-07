import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListItem } from 'src/app/ui-kit/models/models';

@Component({
  selector: 'app-page-autofocus',
  templateUrl: './page-autofocus.component.html',
  styleUrls: ['./page-autofocus.component.less']
})
export class PageAutofocusComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(null),
    control2: new FormControl(null),
    control3: new FormControl(null),
    control4: new FormControl(null)
  });
  public list: ListItem[] = [
    {
      value: 1,
      label: 'Фторография'
    },
    {
      value: 2,
      label: 'Плавание'
    },
    {
      value: 3,
      label: 'Программирование'
    },
    {
      value: 4,
      label: 'Рисование'
    },
    {
      value: 5,
      label: 'Вышивка крестом'
    },
    {
      value: 6,
      label: 'Disabled',
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
