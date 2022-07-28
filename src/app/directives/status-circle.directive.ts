import { Directive, DoCheck, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusCircle]'
})
export class StatusCircleDirective implements OnInit, DoCheck {

  @Input('appStatusCircle') public status: number[];

  private el: Element;

  constructor(private elRef: ElementRef, private render2: Renderer2) { }

  private getOffset(): number {
    const value = 207 - 207 / this.status[1] * this.status[0];
    return value || !isNaN(value) ? value : 207;
  }

  ngOnInit(): void {
    this.el = this.elRef.nativeElement;
  }

  ngDoCheck(): void {
    this.render2.setStyle(this.el, 'stroke-dashoffset', this.getOffset());
  }

}
