import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { Currency } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.less']
})
export class FormCurrencyComponent implements OnInit {

  constructor(public data: DataService) { }

  public currForm: FormGroup = new FormGroup({
    groupFrom: new FormGroup({
      currencyFrom: new FormControl('$'),
      valueFrom: new FormControl(''),
    }),
    groupTo: new FormGroup({
      currencyTo: new FormControl('₽'),
      valueTo: new FormControl('0')
    })
  });
  public currencyPrice = {
    dollar: 100,
    euro: 110,
    pound: 150,
    yen: 0.95
  };
  public currFilteredFrom = this.data.currencyList.filter(item => item.value !== '₽');
  public currFilteredTo = this.data.currencyList.filter(item => item.value === '₽');
  public sub: Subscription;

  // public subscribeControls(): void {
  //   this.currList.controls.forEach((item: FormGroup) => {
  //     const controlTo: AbstractControl = item.get('groupTo.valueTo');
  //     const controlCurrencyTo: AbstractControl = item.get('groupTo.currencyTo');
  //     this.sub = item.get('groupFrom').valueChanges.subscribe(val => {
  //       let currFrom: string;
  //       switch(val.currencyFrom) {
  //         case '$':
  //           currFrom = 'dollar';
  //           break;
  //         case '€':
  //           currFrom = 'euro';
  //           break;
  //         case '£':
  //           currFrom = 'pound';
  //           break;
  //         case '¥':
  //           currFrom = 'yen';
  //           break;
  //         default:
  //           break;
  //       }
  //       controlTo.setValue(val.valueFrom * this.currencyPrice[currFrom]);
  //     });
  //   });
  // }

  ngOnInit(): void {
    // this.subscribeControls();
    this.currForm.get('groupFrom').valueChanges.subscribe(val => {
      let currFrom: string;
      switch(val.currencyFrom) {
        case '$':
          currFrom = 'dollar';
          break;
        case '€':
          currFrom = 'euro';
          break;
        case '£':
          currFrom = 'pound';
          break;
        case '¥':
          currFrom = 'yen';
          break;
        default:
          break;
      }
      this.currForm.get('groupTo.valueTo').setValue(val.valueFrom * this.currencyPrice[currFrom]);
    });
  }

}
