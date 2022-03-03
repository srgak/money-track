import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { User } from 'src/app/data/interfaces';

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
      //подготовить данные
      const parsedArr = JSON.parse(localStorage.getItem('userList'));
      const targetUser: User = parsedArr.find(item => item.login === this.authForm.value.login && item.password === this.authForm.value.password);
      //обновить хранилище, перейти к профилю
      if(targetUser) {
        localStorage.setItem('userData', JSON.stringify(targetUser));
        this.router.navigate(['./account']);
      } else {
        this.authForm.setErrors({
          invalidLogin: 'Неверное имя пользователя или пароль.'
        });
      }
    }
  }

  ngOnInit(): void {
    
  }

}
