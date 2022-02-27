export interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  gender: string;
  login: string;
  password: string;
}

export interface Wallet {
  id: number;
  img: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  operationList: WalletOperation[];
}

export interface WalletOperation {
  type: 'finance' | 'spending';
  price: number;
  comment: string;
  date: string;
}

export interface Currency {
  name: string;
  value: string;
}

export interface MoneyBox {
  value: string;
  name: string;
  imgLink: string;
}
