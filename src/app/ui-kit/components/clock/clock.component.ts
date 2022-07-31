import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'ui-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit, AfterContentInit {
  @ContentChild('input') private inputRef: ElementRef;
  @ContentChild(FormControlName) private readonly formControl: FormControlName;

  private elInput: HTMLInputElement;
  private control: AbstractControl;
  public isActiveClock: boolean = false;
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
    this.isActiveClock = false;
    this.isActiveHour = true;
  }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.elInput = this.inputRef.nativeElement;
    this.control = this.formControl.control;

    this.renderer2.addClass(this.elInput, 'field__input');
    this.renderer2.setAttribute(this.elInput, 'readonly', 'readonly');

    this.renderer2.listen(document, 'click', (event) => {
      const el = event.target;

      if(!el.closest('.field-clock') && el !== this.elInput) this.isActiveClock = false;
      if(el === this.elInput) this.isActiveClock = !this.isActiveClock;
      if(!this.isActiveClock) this.elInput.blur();
    });
  }
}
