import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListItem } from 'src/app/ui-kit/models/models';

@Component({
  selector: 'app-page-dropdown-list',
  templateUrl: './page-dropdown-list.component.html',
  styleUrls: ['./page-dropdown-list.component.less']
})
export class PageDropdownListComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    control1: new FormControl(2),
    control2: new FormControl(null)
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
    },
    {
      value: '',
      label: 'foo1'
    },
    {
      value: '',
      label: 'foo2'
    },
    {
      value: '',
      label: 'foo3'
    },
    {
      value: '',
      label: 'foo4'
    },
    {
      value: '',
      label: 'foo5'
    },
    {
      value: '',
      label: 'foo6'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
