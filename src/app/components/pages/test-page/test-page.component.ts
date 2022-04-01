import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItem } from 'src/app/data/interfaces';
import { ValidatorsService } from 'src/app/data/validators.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.less']
})
export class TestPageComponent implements OnInit {

  constructor(private validators: ValidatorsService) { }

  public form: FormGroup = new FormGroup({
    additional: new FormGroup({
      additionalField: new FormControl('')
    }),
    additional2: new FormGroup({
      additionalField: new FormControl('')
    }),
    name: new FormControl(''),
    birthday: new FormControl('', [this.validators.validateBirthday]),
    personalData: new FormGroup({
      birthday: new FormControl('', this.validators.validateBirthday),
      series: new FormControl('')
    }),
    contact: new FormControl(''),
    contactAdd: new FormGroup({
      phone: new FormControl(''),
      vk: new FormControl('')
    })
  });
  public list1: string[] = [
    'Пункт 1',
    'Пункт 2',
    'Пункт 3'
  ];
  public list2: ListItem[] = [
    {
      name: 'Не указывать',
      value: 'none'
    },
    {
      name: 'Телефон',
      value: 'phone',
      otherBlock: true
    },
    {
      name: 'ВК',
      value: 'vk',
      otherBlock: true
    }
  ];
  public currentTemplate: string;

  ngOnInit(): void {
    this.form.markAllAsTouched();
  }

}
