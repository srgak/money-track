import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { User } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.less']
})
export class FormRegistrationComponent implements OnInit {

  constructor(public data: DataService) { }
  public regForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    patronymic: new FormControl('', Validators.required),
    gender: new FormControl('man', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.data.isPasswordCorrect])
  });
  public passwordVisible = false;
  public addUser(): void {
    if(this.regForm.valid) {
      const userData: User = {...this.regForm.value};

      //занести данные в localstorage
      if(!localStorage.getItem('userList')) {
        localStorage.setItem('userList', JSON.stringify([]));
      }
      const parsedArr: User[] = JSON.parse(localStorage.getItem('userList'));
      parsedArr.push(userData);
      localStorage.setItem('userList', JSON.stringify(parsedArr));

      this.data.needReg = false;
    }
  }

  ngOnInit(): void {
    this.regForm.get('patronymic')?.valueChanges
      .subscribe(val => this.regForm
        .get('gender')?.setValue(val.substring(val.length - 3, val.length) === 'вна' ? 'woman' : 'man'));
  }

}
