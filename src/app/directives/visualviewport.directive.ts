import { ChangeDetectorRef, Directive, HostBinding } from "@angular/core";
import { first, fromEvent, map } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective {
  @HostBinding("style.height") private height: string;

  constructor(private cdr: ChangeDetectorRef) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(
        first(),
        map(() => window.visualViewport)
      )
      .subscribe((data: VisualViewport) => {
        console.log(data.height);
        this.height = `${data.height}px`;
        cdr.detectChanges();
      });
  }
}
