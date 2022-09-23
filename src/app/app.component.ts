import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service';
import { ValdemortConfig } from 'ngx-valdemort';
import { StorageService } from './services/storage.service';
import { MethodsService } from './services/methods.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBirthday } from './ui-kit/validators/validator-birthday';

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

  ngOnInit(): void {

  }
}
