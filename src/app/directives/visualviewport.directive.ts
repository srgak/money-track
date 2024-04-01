import { ViewportScroller } from "@angular/common";
import { ChangeDetectorRef, Directive, HostBinding } from "@angular/core";
import { fromEvent, map } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective {
  @HostBinding("style.height") public height: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private viewportScroller: ViewportScroller
  ) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(map(() => window.visualViewport as VisualViewport))
      .subscribe(({ height }) => {
        this.height = `${height}px`;
        this.viewportScroller.scrollToPosition([0, 0]);
        cdr.markForCheck();
      });
  }
}
