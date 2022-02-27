import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from './data/data.service';
import { ValdemortConfig } from 'ngx-valdemort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private config: ValdemortConfig, public data: DataService) {
    config.errorClasses = 'input__error'
  }

  
}
