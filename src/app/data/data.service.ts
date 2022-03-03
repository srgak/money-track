import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Currency, Menu, MoneyBox, User, Wallet } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public needReg: boolean = false;
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
}
