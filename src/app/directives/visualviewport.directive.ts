import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from "@angular/core";
import { debounceTime, fromEvent, map, tap } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective {
  @HostBinding("style.height") public height: string;

  private isOpenKeyboard = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(
        map(() => window.visualViewport as VisualViewport),
        tap(({ height }) => {
          this.isOpenKeyboard = height < window.innerHeight;
        })
      )
      .subscribe(({ height }) => {
        if (this.isOpenKeyboard) {
          this.renderer.addClass(this.elRef.nativeElement, "active");
        } else {
          this.renderer.removeClass(this.elRef.nativeElement, "active");
        }
        this.height = `${height}px`;
        cdr.markForCheck();
      });

    fromEvent(window, "scroll")
      .pipe(debounceTime(50))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
}
