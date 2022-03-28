import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { HttpService } from 'src/app/data/http.service';
import { User } from 'src/app/data/interfaces';
import { ValidatorsService } from 'src/app/data/validators.service';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.less']
})
export class FormRegistrationComponent implements OnInit {

  constructor(public data: DataService, private validators: ValidatorsService) { }

  public regForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    patronymic: new FormControl('', Validators.required),
    gender: new FormControl('man', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.validators.validatePassword]),
    contact: new FormGroup({
      email: new FormControl(''),
      phone: new FormControl(''),
      telegram: new FormControl(''),
      vk: new FormControl('')
    }),
  });
  public passwordVisible = false;
  public reqLinkList = {
    firstName: './assets/json/data-names.json',
    lastName: './assets/json/data-surname.json',
    patronymic: './assets/json/data-patronymic.json'
  };
  public contactTemplate: string;

  public addUser(): void {
    if(this.regForm.valid) {
      //подготовить данные
      const userData: User = {...this.regForm.value};
      userData.walletList = [];
      if(!localStorage.getItem('userList')) {
        localStorage.setItem('userList', JSON.stringify([]));
      }
      const parsedArr: User[] = JSON.parse(localStorage.getItem('userList'));
      //изменить данные, обновить хранилище, показать форму авторизации
      parsedArr.push(userData);
      localStorage.setItem('userList', JSON.stringify(parsedArr));
      this.data.needReg = false;
    } else {
      this.regForm.markAllAsTouched();
    }
  }
  public setContactTemplate(name: string): void {
    this.regForm.get('contact').reset();
    this.contactTemplate = name;
  }

  ngOnInit(): void {
    this.regForm.get('patronymic').valueChanges
      .subscribe(val => this.regForm
        .get('gender')
        .setValue(val.substring(val.length - 3, val.length) === 'вна' ? 'woman' : 'man'));
  }
}
