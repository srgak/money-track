import { ViewportScroller } from "@angular/common";
import { ChangeDetectorRef, Directive, HostBinding } from "@angular/core";
import { delay, fromEvent, map } from "rxjs";

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
        cdr.markForCheck();
      });

    fromEvent(window.visualViewport as VisualViewport, "scroll")
      .pipe(
        map(() => window.visualViewport as VisualViewport),
        delay(500)
      )
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
}
