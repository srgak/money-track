export interface Menu {
  name: string;
  link: string;
}

export interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  gender: string;
  email: string;
  login: string;
  password: string;
  walletList: Wallet[];
}

export interface Wallet {
  id?: number;
  img: string;
  name: string;
  type: string;
  typeOther?: string;
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

export interface ListItem {
  name: string;
  value: string;
  otherBlock?: boolean;
}

export interface Task {
  task: string;
  priority: string;
  dateReminder: Date;
  filter: string;
  category: number;
}

export interface TaskFilter {
  param: string;
  name: string;
  active: boolean;
}

export interface Category {
  name: string;
  id: number;
  active: boolean;
}

export interface MoneyBox extends ListItem {
  imgLink: string;
}

export interface Deposit {
  total: number;
  profit: number;
  price: number;
}

export interface Capitalization {
  name: string;
  value: number;
}