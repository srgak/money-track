import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Currency, MoneyBox, User, Wallet } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public needReg: boolean = true;
  public userData: User | null = null;
  public walletList: Wallet[] = [];
  public currentWallet: Wallet = {
    // id: 0,
    img: '',
    name: '',
    type: '',
    price: 0,
    currency: '',
    operationList: []
  };
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
      name: 'Японская йена (¥)',
      value: '¥'
    }
  ];
  public customPatternList: any[] = [
    {
      c: {pattern: new RegExp(/[а-яА-Я\s-]/)}
    }
  ];

  public setLocStore(): void {
    localStorage.setItem('walletList', JSON.stringify(this.walletList));
  }
  public isPasswordCorrect(control: FormControl): Object | null {
    const { value } = control
    const minLength = 6;
    return value && value.length < minLength? 
      { incorrectPassword: `Пароль не соответствует требованиям. Пароль должен быть не менее ${minLength} символов` } : null;
  }
}
