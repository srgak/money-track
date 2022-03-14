import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { Deposit } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-deposit',
  templateUrl: './form-deposit.component.html',
  styleUrls: ['./form-deposit.component.less']
})
export class FormDepositComponent implements OnInit {

  @Output() onUpdatePrice = new EventEmitter<string>();

  constructor(public data: DataService) { }

  public depositForm: FormGroup = new FormGroup({
    startData: new FormGroup({
      price: new FormControl('', Validators.required),
      percent: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required)
    }),
    capitalization: new FormGroup({
      periodicity: new FormControl(''),
      percent: new FormControl('')
    })
  });

  public resetControls(isOpen: boolean, groupName: string): void {
    if(!isOpen) this.depositForm.get(groupName).reset();
  }

  ngOnInit(): void {
    this.depositForm.valueChanges
      .pipe(
        debounceTime(300),
        map(val => Object.create({
          price: +val.startData.price,
          percent: +val.startData.percent,
          period: +val.startData.period,
          periodicity: +val.capitalization.periodicity,
        }))
      )
    .subscribe(val => {
      const {price, percent, period, periodicity} = val;
      let data;
      if(val.periodicity) {
        data = {...this.data.getProfitCapitalization({price, percent, period, periodicity})};
      } else {
        data = {...this.data.getProfit({price, percent, period})};
      }

      this.onUpdatePrice.emit(JSON.stringify(data));
    });

    this.depositForm.get('startData').setValue({
      price: 100000,
      percent: 8,
      period: 365
    });
  }
}
