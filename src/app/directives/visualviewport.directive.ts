import { ViewportScroller } from "@angular/common";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
} from "@angular/core";
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
    private viewportScroller: ViewportScroller,
    private elRef: ElementRef
  ) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(map(() => window.visualViewport as VisualViewport))
      .subscribe(({ height }) => {
        const input = document.querySelector(".input") as HTMLElement;

        this.height = `${height}px`;
        (this.elRef.nativeElement as HTMLElement).style.top = `${
          window.innerHeight -
          input?.getBoundingClientRect().top -
          input?.clientHeight / 2
        }px`;
        cdr.markForCheck();
      });

    fromEvent(window, "scroll")
      .pipe(debounceTime(50))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
}
