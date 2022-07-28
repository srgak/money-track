import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'ui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements AfterContentInit {

  @Input() public rangeMin: number;
  @Input() public rangeMax: number;
  @Input() public labelMin?: string;
  @Input() public labelMax?: string;
  @ContentChild('input') inputRef: ElementRef;
  @ContentChild(FormControlName) private formControl: FormControlName;
  private el: Element;
  private elInput: Element;
  private elInputRange: HTMLInputElement;
  private elStatusBar: Element;
  private control: AbstractControl;

  constructor(private renderer2: Renderer2, private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  private setValueRange(value): void {
    this.renderer2.setProperty(this.elInputRange, 'value', value || 0);

    const percent = (+value - this.rangeMin) / (this.rangeMax - this.rangeMin) * 100;
    this.renderer2.setStyle(this.elStatusBar, 'width', (percent > 100 ? 100 : percent) + '%');
  }

  private correctValue(value): void {
    if(value > this.rangeMax) this.control.setValue(this.rangeMax);
    if(value < this.rangeMin) this.control.setValue(this.rangeMin);
  }

  ngAfterContentInit(): void {
    //присвоить значения
    this.elInput = this.inputRef.nativeElement;
    this.elInputRange = this.el.querySelector('.field-range__input');
    this.elStatusBar = this.el.querySelector('.field-range__status-bar');
    this.control = this.formControl.control;

    this.renderer2.addClass(this.elInput, 'field__input');

    setTimeout(() => {
      this.setValueRange(this.control.value);
    });

    //подписка на события
    this.renderer2.listen(this.elInputRange, 'input', () => {
      this.control.setValue(this.elInputRange.value);
    });
    this.renderer2.listen(this.elInput, 'blur', () => {
      this.correctValue(this.control.value);
    });
    this.renderer2.listen(this.elInput, 'focus', () => {
      this.correctValue(this.control.value);
    });
    this.control.valueChanges.subscribe(val => {
      this.setValueRange(val);
    });
  }

}
