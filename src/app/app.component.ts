import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service';
import { ValdemortConfig } from 'ngx-valdemort';
import { StorageService } from './services/storage.service';
import { MethodsService } from './services/methods.service';
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

  public menuList: MenuMain[] = [
    {
      name: 'Главная',
      link: './'
    },
    {
      name: 'Часы',
      link: './clock'
    },
    {
      name: 'UI',
      subList: [
        {
          name: 'Аккордион',
          link: './accordion'
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
      ]
    },
  ];

  ngOnInit(): void {
  }
}
