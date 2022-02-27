import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fixBlock]'
})
export class FixBlockDirective {

  constructor() { }

  @HostBinding('style.position') private position: string;
  @HostListener('window:scroll', ['$event']) onScroll(event: any): void {
    const scrollingEl = event.target.scrollingElement;
    const scrollTop = scrollingEl.scrollTop;
    const height = scrollingEl.offsetHeight;
    const scrollHeight = scrollingEl.scrollHeight;
    if(scrollTop + height >= scrollHeight - 50) {
      this.position = 'static';
    } else {
      this.position = 'fixed';
    }
  }

}
