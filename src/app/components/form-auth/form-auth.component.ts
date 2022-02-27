import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.less']
})
export class FormAuthComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }
  
  public authForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  public passwordVisible = false;
  
  public authUser(): void {
    if(this.authForm.valid) {
      let parsedArr = JSON.parse(localStorage.getItem('userList'));
      parsedArr = parsedArr.filter(item => item.login === this.authForm.value.login && item.password === this.authForm.value.password);
      if(parsedArr.length) {
        this.data.userData = parsedArr[0];
        localStorage.setItem('isLogin', true.toString());
        this.router.navigate(['./wallets']);
      } else {
        this.authForm.setErrors({
          invalidLogin: 'Неверное имя пользователя или пароль.'
        });
      }
    }
  }

  ngOnInit(): void {
    this.authForm.get('login').valueChanges.subscribe(val => {
      console.log(val);
    });
  }

}
