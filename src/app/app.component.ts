import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service';
import { ValdemortConfig } from 'ngx-valdemort';
import { StorageService } from './services/storage.service';
import { MethodsService } from './services/methods.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBirthday } from './ui-kit/validators/validator-birthday';
import { MenuItem, MenuMain } from './ui-kit/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private config: ValdemortConfig, public data: DataService, private store: StorageService, private methods: MethodsService) {
    config.errorClasses = 'input__error';
  }

  public form: FormGroup = new FormGroup({
    fieldSimple: new FormControl(),
    fieldSlider: new FormControl(500000),
    fieldPassword: new FormControl(),
    selectSimple: new FormControl(2),
    selectMultiple: new FormControl(),
    clock: new FormControl(),
    date: new FormControl(),
    autofocusGroup: new FormGroup({
      control1: new FormControl(null, [Validators.required, ValidateBirthday()]),
      control2: new FormControl(),
      control3: new FormControl(),
      control4: new FormControl(),
    }),

    testControl: new FormControl(null, [Validators.requiredTrue])
  });

  public selectSimpleList = [
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

  public menuList: MenuMain[] = [
    {
      name: 'Главная',
      link: './'
    },
    {
      name: 'Аккордион',
      link: './accordion',
    },
    {
      name: 'Подменю',
      isSubMenu: true,
      subList: [
        {
          name: 'Item1'
        },
        {
          name: 'Item2'
        }
      ]
    },
    {
      name: 'Поля',
      link: './field'
    },
    {
      name: 'Ползунок',
      link: './slider'
    },
    {
      name: 'Выпадающий список',
      link: './dropdown-list'
    },
    {
      name: 'Выдающие часы',
      link: './dropdown-clock'
    },
    {
      name: 'Выпадающий календарь',
      link: './dropdown-date'
    },
    {
      name: 'Автофокус полей',
      link: './autofocus'
    },
    {
      name: 'Пагинация',
      link: './pagination'
    }
  ];

  ngOnInit(): void {

  }
}
