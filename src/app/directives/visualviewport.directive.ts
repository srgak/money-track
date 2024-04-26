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
  @HostBinding("style.height") public height: string;

  private isOpenKeyboard = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    // fromEvent(window.visualViewport as VisualViewport, "resize")

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
    ).subscribe((isFocused) => {
      isFocused
        ? this.renderer.addClass(this.elRef.nativeElement, "active")
        : this.renderer.removeClass(this.elRef.nativeElement, "active");
      // if (this.isOpenKeyboard) {
      //   this.renderer.addClass(this.elRef.nativeElement, "active");
      // } else {
      //   this.renderer.removeClass(this.elRef.nativeElement, "active");
      // }
      // this.height = `${height}px`;
      // this.cdr.markForCheck();
    });
  }
}
