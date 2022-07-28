import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[uiInputClear]'
})
export class InputClearDirective implements OnInit {

  private elInput: Element;
  private control: AbstractControl;
  private elClear: Element;
  private elFieldContainer: Element;

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
    private ngControl: NgControl
  ) {
    this.elInput = elRef.nativeElement;
  }

  @HostListener('focus') onFocus():void {
    this.renderer2.addClass(this.elClear, 'active');
  };
  @HostListener('blur') onBlur(): void {
    this.renderer2.removeClass(this.elClear, 'active');
  }

  ngOnInit(): void {
    this.control = this.ngControl.control;
    this.elClear = this.renderer2.createElement('button');
    this.elFieldContainer = this.renderer2.parentNode(this.elInput);

    this.renderer2.addClass(this.elClear, 'field__clear');
    this.renderer2.appendChild(this.elFieldContainer, this.elClear);

    this.renderer2.listen(this.elClear, 'click', () => {
      this.renderer2.removeClass(this.elClear, 'active');
      this.control.reset();
    });
  }

}
