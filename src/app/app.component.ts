import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { ValdemortConfig } from 'ngx-valdemort';
import { StorageService } from './data/storage.service';
import { MethodsService } from './data/methods.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ExtraDate } from 'src/assets/scripts/dateExtra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private config: ValdemortConfig, public data: DataService, private store: StorageService, private methods: MethodsService) {
    config.errorClasses = 'input__error'
  }

  public form: FormGroup = new FormGroup({
    fieldSimple: new FormControl(),
    fieldSlider: new FormControl(500000),
    fieldPassword: new FormControl(),
    selectSimple: new FormControl('2'),
    selectMultiple: new FormControl()
  });

  public selectSimpleList = [
    {
      id: 1,
      name: 'Фторография'
    },
    {
      id: 2,
      name: 'Плавание'
    },
    {
      id: 3,
      name: 'Программирование'
    },
    {
      id: 4,
      name: 'Рисование'
    },
    {
      id: 5,
      name: 'Вышивка крестом'
    }
  ];

  ngOnInit(): void {
    this.form.get('selectMultiple').valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}
