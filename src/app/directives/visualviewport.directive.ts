import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  Renderer2,
} from "@angular/core";
import { debounceTime, fromEvent, map, merge, tap } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective implements OnInit {
  // @HostBinding("style.height") public height: string;

  private isOpenKeyboard = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    fromEvent(window, "scroll")
      .pipe(debounceTime(300))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
  ngOnInit(): void {
    merge(
      fromEvent(this.elRef.nativeElement.querySelector(".input"), "focus").pipe(
        map(() => "focus")
      ),
      fromEvent(this.elRef.nativeElement.querySelector(".input"), "blur").pipe(
        map(() => "blur")
      ),
      fromEvent(window.visualViewport as VisualViewport, "resize").pipe(
        map(() => "resize")
      )
    ).subscribe((type) => {
      if (type === "resize") {
        const height = (window.visualViewport as VisualViewport).height;

        height < window.innerHeight
          ? this.renderer.addClass(this.elRef.nativeElement, "active")
          : this.renderer.removeClass(this.elRef.nativeElement, "active");

        this.renderer.setStyle(
          this.elRef.nativeElement,
          "height",
          `${height}px`
        );
      } else {
        if (type === "focus") {
          this.renderer.addClass(this.elRef.nativeElement, "active");
          this.renderer.addClass(this.elRef.nativeElement, "active_height");
        } else {
          this.renderer.removeClass(this.elRef.nativeElement, "active");
          this.renderer.removeClass(this.elRef.nativeElement, "active_height");
        }
      }
    });
  }
}
