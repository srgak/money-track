import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiInputPasswd]'
})
export class InputPasswdDirective implements OnInit {

  @Input('uiIconPassShow') public iconShow: string = 'assets/img/password/icon-pass-show.png';
  @Input('uiIconPassHide') public iconHide: string = 'assets/img/password/icon-pass-hide.png';
  private isShow: boolean = false;
  private elInput: Element;
  private elFieldContainer: Element;
  private changeBtn: Element;

  constructor(private elRef: ElementRef, private renderer2: Renderer2) {
    this.elInput = elRef.nativeElement;
  }

  ngOnInit(): void {
    this.changeBtn = this.renderer2.createElement('button');
    this.elFieldContainer = this.renderer2.parentNode(this.elInput);

    this.renderer2.addClass(this.changeBtn, 'field__pass');
    this.renderer2.setStyle(this.changeBtn, 'background', `url('${this.iconHide}') no-repeat center/cover`)
    this.renderer2.appendChild(this.elFieldContainer, this.changeBtn);

    this.renderer2.listen(this.changeBtn, 'click', () => {
      this.isShow = !this.isShow;
      this.renderer2.setAttribute(this.elInput, 'type', this.isShow ? 'text' : 'password');
      this.renderer2.setStyle(this.changeBtn, 'background', `url('${this.isShow ? this.iconShow : this.iconHide}') no-repeat center/cover`);
    });
  }
}
