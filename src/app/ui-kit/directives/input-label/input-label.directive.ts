import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[uiInputLabel]'
})
export class InputLabelDirective implements OnInit {

  @Input('uiInputLabel') public labelText?: string;
  @Input('required') public required?: string;
  private elInput: HTMLInputElement;
  private elLabel: HTMLElement;
  private elField!: Element;
  private elFieldContainer!: Element;
  private control!: AbstractControl;

  constructor(private renderer2: Renderer2, private elRef: ElementRef, private ngControl: NgControl) {
    this.elInput = elRef.nativeElement;
    this.elLabel = renderer2.createElement('label');
  }

  @HostListener('focus') private onFocus(): void {
    this.renderer2.addClass(this.elField, 'active');
  }
  @HostListener('blur') private onBlur(): void {
    if(!this.control.value) {
      this.renderer2.removeClass(this.elField, 'active');
    }
  }

  ngOnInit(): void {
    if(this.required) this.labelText += '<sup>*</sup>';

    this.control = this.ngControl.control!;
    this.elField = this.elInput.closest('.field')!;
    this.elFieldContainer = this.renderer2.parentNode(this.elInput);

    this.renderer2.addClass(this.elLabel, 'field__label');
    this.renderer2.appendChild(this.elFieldContainer, this.elLabel);
    this.renderer2.setProperty(this.elLabel, 'innerHTML', this.labelText);

    if(this.control.value) {
      this.onFocus();
    }
    this.control.valueChanges.subscribe(val => {
      if(val) {
        this.onFocus();
      } else {
        this.onBlur();
      }
    });
  }
}
