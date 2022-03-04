import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { User } from 'src/app/data/interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.userData = JSON.parse(localStorage.getItem('userData'));
  }

}
