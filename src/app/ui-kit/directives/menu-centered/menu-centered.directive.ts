import { AfterViewInit, ContentChild, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[uiMenuCentered]'
})
export class MenuCenteredDirective implements AfterViewInit {
  private menuList: HTMLElement;

  @HostListener('window:resize') private onResize(): void {
    this.renderer2.setStyle(this.menuList, 'top', `calc(50% - ${this.menuList.offsetHeight / 2}px)`);
  };

  constructor(
    private renderer2: Renderer2,
    private elRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.menuList = this.elRef.nativeElement.querySelector('.menu-list');
    this.onResize();
  }
}
