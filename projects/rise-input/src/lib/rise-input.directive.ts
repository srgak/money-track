import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[activeInput]'
})
export class RiseInputDirective implements AfterViewInit {
  constructor(private el: ElementRef, private control: NgControl) {}

  private input = this.el.nativeElement;

  @Input('activeInput') public placeholder: string;
  @HostListener('focus') onFocus(): void {
    this.input.closest('.input').classList.add('input_active');
    this.input.placeholder = this.input.parentNode.nextSibling && this.input.parentNode.nextSibling.innerText ? '' : this.placeholder;
  }
  @HostListener('blur') onBlur(): void {
    if(!this.control.value) {
      this.input.closest('.input').classList.remove('input_active');
      this.input.placeholder = '';
    }
    if(this.input.parentNode.nextSibling && this.input.parentNode.nextSibling.innerText) this.input.placeholder = '';
  }
  @HostListener('nzOnOpenChange', ['$event']) onNzOpen(event: any): void {
    return event ? this.onFocus() : this.onBlur();
  }
  @HostListener('nzFocus') onNzFocus(): void {
    this.onFocus();
  }
  @HostListener('nzBlur') onNzBlur(): void {
    setTimeout(()=>this.onBlur());
  }

  ngAfterViewInit(): void {
    this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
    if (this.control.value) {
      this.onFocus();
    }
    
  }
}
