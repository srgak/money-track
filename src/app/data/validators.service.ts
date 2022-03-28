import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public validatePassword(control: FormControl): Object | null {
    const { value } = control
    const minLength = 6;
    return value && value.length < minLength? 
      { incorrectPassword: `Пароль не соответствует требованиям. Пароль должен быть не менее ${minLength} символов` } : null;
  }

  public validateBirthday(control: FormControl): Object | null {
    const { value } = control;
    const oldDate = new Date('1900-01-01');
    const currentDate = new Date(
      `${value.substring(4, 8)}-
      ${value.substring(2, 4)}-
      ${value.substring(0, 2)}`
    );
    const newDate = new Date(
      `${new Date().getFullYear() - 18}-
      ${new Date().getMonth() + 1}-
      ${new Date().getDate()}`
    );

    return value.length === 8 &&
      !(oldDate.getTime() < currentDate.getTime() && currentDate.getTime() < newDate.getTime()) ?
      { incorrectDate: 'Неправильно указана дата рождения' } : null;
  }
}
