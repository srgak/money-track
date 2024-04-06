import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { NgControl } from "@angular/forms";
import { filter, fromEvent, map, merge } from "rxjs";

@Directive({
  selector: "[flashingCaret]",
})
export class FlashinfCaretDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) {
    merge(
      fromEvent(this.elRef.nativeElement, "focus").pipe(map(() => true)),
      fromEvent(this.elRef.nativeElement, "blur").pipe(
        map(() => Boolean(this.ngControl.control?.value.length))
      )
    ).subscribe((isEnable) => {
      const parentElement = this.renderer.parentNode(this.elRef.nativeElement);

      if (isEnable) {
        this.renderer.removeClass(parentElement, "flashing");
      } else {
        this.renderer.addClass(parentElement, "flashing");
      }
    });
  }
}
