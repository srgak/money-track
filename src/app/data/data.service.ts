import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from './http.service';
import { Capitalization, Currency, Menu, MoneyBox, User, Wallet } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpService) { }

  public needReg: boolean = true;
  public userData: User | null = null;
  public menuData: Menu[] = [
    {
      name: 'Профиль',
      link: '/account'
    },
    {
      name: 'Счета',
      link: '/wallets'
    },
    {
      name: 'Конвертер валют',
      link: '/currency'
    },
    {
      name: 'Калькулятор вклада',
      link: '/deposit'
    }
  ];
  public walletList: Wallet[] = [];
  public currentWallet: Wallet | null = null;
  public moneBoxList: MoneyBox[] = [
    {
      value: 'card',
      name: 'Карта',
      imgLink: ''
    },
    {
      value: 'cash',
      name: 'Наличные',
      imgLink: ''
    },
    {
      value: 'deposit',
      name: 'Вклад',
      imgLink: ''
    }
  ];
  public currencyList: Currency[] = [
    {
      name: 'Российский рубль (₽)',
      value: '₽'
    },
    {
      name: 'Американский доллар ($)',
      value: '$'
    },
    {
      name: 'Евро (€)',
      value: '€'
    },
    {
      name: 'Фунт стерлингов (£)',
      value: '£'
    },
    {
      name: 'Японская иена (¥)',
      value: '¥'
    }
  ];
  public customPatternList: any[] = [
    {
      c: {pattern: new RegExp(/[а-яА-Я\s-]/)}
    }
  ];
  public depositPeriodicity: Capitalization[] = [
    {
      name: 'Раз в год',
      value: 1
    },
    {
      name: 'Раз в полгода',
      value: 2
    },
    {
      name: 'Раз в квартал',
      value: 4
    },
    {
      name: 'Раз в месяц',
      value: 12
    }
  ];

  public setLocStore(): void {
    const userData: User = JSON.parse(localStorage.getItem('userData'));
    const userList: User[] = JSON.parse(localStorage.getItem('userList'));
    const index = userList.findIndex(item => item.login === userData.login);
    //записать данные в userData
    userData.walletList = this.walletList;
    localStorage.setItem('userData', JSON.stringify(userData));
    //записать данные в userList
    userList.splice(index, 1, userData);
    localStorage.setItem('userList', JSON.stringify(userList));
  }
  public isPasswordCorrect(control: FormControl): Object | null {
    const { value } = control
    const minLength = 6;
    return value && value.length < minLength? 
      { incorrectPassword: `Пароль не соответствует требованиям. Пароль должен быть не менее ${minLength} символов` } : null;
  }

  public calculateProfit(price, percent, period): number {
    return Math.round(price * percent * period / 365 / 100);
  }
  //профит
  public getProfit(data) {
    data.profit = this.calculateProfit(data.price, data.percent, data.period);
    data.total = data.price + data.profit;

    return data;
  }
  //профит с учётом капитализации
  public getProfitCapitalization(data) {
    const days: number = Math.floor(365 / data.periodicity); //количество дней на время периода
    let startPrice: number = data.price; //начальная стоиомсть
    let prevDate: Date = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`); //начальная дата
    const iteration: number = 12 / data.periodicity; //периодичность между датами
    data.profit = 0; //профит
    for(let i = 0; i < data.periodicity && data.period >= days; i++) {
      //следующа дата с учётом периодичности
      const nextDate = new Date(`${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-01`);
      nextDate.setMonth(prevDate.getMonth() + iteration);
      //обновление стоимости
      data.price  += this.calculateProfit(data.price, data.percent, this.getRangeDays(prevDate, nextDate));
      prevDate = nextDate; //обновление начальной даты
      data.period -= days;
    }
    data.profit = data.price - startPrice; //посчитать профит
    data.price = startPrice; //откатить к начальной цене
    data.total = data.price + data.profit; //сумма в конце

    return data;
  }

  public getRangeDays(start: Date, end: Date) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = end.getTime() - start.getTime();

    return Math.round(diff / oneDay);
  }
}
