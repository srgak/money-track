import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[uiInputClear]'
})
export class InputClearDirective implements OnInit {

  private elInput: Element;
  private control: AbstractControl;
  private elClear: Element;
  private elFieldContainer: Element;
  private elArrow: Element;

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
    private ngControl: NgControl
  ) {
    this.elInput = elRef.nativeElement;
  }

  ngOnInit(): void {
    this.control = this.ngControl.control;
    this.elClear = this.renderer2.createElement('button');
    this.elFieldContainer = this.renderer2.parentNode(this.elInput);
    this.elArrow = this.elFieldContainer.querySelector('.field__arrow');

    this.renderer2.addClass(this.elClear, 'field__clear');
    this.renderer2.appendChild(this.elFieldContainer, this.elClear);

    this.renderer2.listen(this.elClear, 'click', () => {
      this.control.reset();
    });
    if(this.elArrow) {
      this.renderer2.listen(this.elInput, 'mouseenter', () => {
        this.renderer2.setStyle(this.elArrow, 'display', 'none');
      });
      this.renderer2.listen(this.elInput, 'mouseleave', () => {
        this.renderer2.setStyle(this.elArrow, 'display', 'block');
      });
    }
  }

}
