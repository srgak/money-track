import { ViewportScroller } from "@angular/common";
import { ChangeDetectorRef, Directive, HostBinding } from "@angular/core";
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  fromEvent,
  map,
  tap,
} from "rxjs";

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

    // fromEvent(window, "scroll")
    //   .pipe(debounceTime(100))
    //   .subscribe(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   });
  }
}
