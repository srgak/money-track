import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { Deposit } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-deposit',
  templateUrl: './form-deposit.component.html',
  styleUrls: ['./form-deposit.component.less']
})
export class FormDepositComponent implements OnInit {

  @Output() onUpdatePrice = new EventEmitter<string>();

  constructor() { }

  public depositForm: FormGroup = new FormGroup({
    price: new FormControl('', Validators.required),
    percent: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.depositForm.valueChanges
      .pipe(
        debounceTime(300),
        map(val => Object.create({
          price: +val.price,
          percent: +val.percent,
          period: +val.period
        }))
      )
    .subscribe(val => {
      const {price, percent, period} = val;
      const profit: number = Math.round(price * percent * period / 365 / 100);
      const total: number = price + profit;
      const data: Deposit = {price, profit, total};
      this.onUpdatePrice.emit(JSON.stringify(data));
    });

    this.depositForm.setValue({
      price: 100000,
      percent: 20,
      period: 365
    });
  }

}
