import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from "@angular/core";
import { debounceTime, fromEvent, map, merge } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(map(() => window.visualViewport as VisualViewport))
      .subscribe(({ height }) => {
        this.renderer.setStyle(
          this.elRef.nativeElement,
          "height",
          `${height}px`
        );
      });

    fromEvent(window, "scroll")
      .pipe(debounceTime(300))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
  ngOnInit(): void {
    merge(
      fromEvent(this.elRef.nativeElement.querySelector(".input"), "focus").pipe(
        map(() => true)
      ),
      fromEvent(this.elRef.nativeElement.querySelector(".input"), "blur").pipe(
        map(() => false)
      )
    ).subscribe((hasFocus) => {
      if (hasFocus) {
        this.renderer.addClass(this.elRef.nativeElement, "active");
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, "active");
      }
    });
  }
}
