import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { Dropdown } from '../../../scripts/dropdown';

@Component({
  selector: 'ui-clock',
  templateUrl: './clock-main.component.html',
  styleUrls: ['./clock-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockMainComponent implements OnInit, AfterContentInit, DoCheck {
  @ContentChild('input') private inputRef: ElementRef;
  @ContentChild(FormControlName) private readonly formControl: FormControlName;

  private elInput: HTMLInputElement;
  private control: AbstractControl;
  public dropdown: Dropdown;
  public isActiveHour: boolean = true;
  public isActiveMinute: boolean = false;
  public readonly countHourAM: string[][] = [
    ['12', '03', '06', '09'],
    ['01', '04', '07', '10'],
    ['02', '05', '08', '11']
  ];
  public readonly countHourPM: string[][] = [
    ['00', '15', '18', '21'],
    ['13', '16', '19', '22'],
    ['14', '17', '20', '23']
  ];
  public readonly countMinute: string[][] = [
    ['00', '15', '30', '45'],
    ['05', '20', '35', '50'],
    ['10', '25', '40', '55']
  ];
  public time: string;

  constructor(private renderer2: Renderer2) {}

  public chooseHour(value: string): void {
    this.time = value + ':';
    this.isActiveHour = false;
    this.isActiveMinute = true;
  }

  public chooseMinute(value: string): void {
    this.time += value;
    this.control.setValue(this.time);
    this.isActiveMinute = false;
    this.isActiveHour = true;
    this.dropdown.activeFlag$.next(false);
  }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.elInput = this.inputRef.nativeElement;
    this.control = this.formControl.control;
    this.dropdown = new Dropdown(this.elInput, '.field-clock');

    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.setAttribute(this.elInput, 'readonly', 'readonly');

    
  }
  ngDoCheck(): void {
      // console.log(123);
  }
}
