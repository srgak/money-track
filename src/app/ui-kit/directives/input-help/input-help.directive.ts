import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiInputHelp]'
})
export class InputHelpDirective implements OnInit {

  @Input('uiInputHelp') public helpText!: string;
  private elInput: HTMLInputElement;
  private elHelp: Element;
  private elField!: Element;

  constructor(private renderer2: Renderer2, private elRef: ElementRef) {
    this.elInput = elRef.nativeElement;
    this.elHelp = renderer2.createElement('div');
  }

  ngOnInit(): void {
    this.elField = this.elInput.closest('.field')!;
    this.renderer2.addClass(this.elHelp, 'field__help');
    this.renderer2.appendChild(this.elField, this.elHelp);
    this.renderer2.setProperty(this.elHelp, 'innerText', this.helpText);
  }
}
