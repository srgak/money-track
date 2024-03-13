import { ChangeDetectorRef, Directive, HostBinding } from "@angular/core";
import { filter, first, fromEvent, map } from "rxjs";

@Directive({
  selector: "[appVisualviewport]",
})
export class VisualviewportDirective {
  @HostBinding("style.height") private height: string;

  constructor(private cdr: ChangeDetectorRef) {
    fromEvent(window.visualViewport as VisualViewport, "resize")
      .pipe(
        map(() => window.visualViewport as VisualViewport),
        filter(data => data.height < window.innerHeight),
        first(),
      )
      .subscribe(data => {
        console.log(data.height);
        this.height = `${data.height}px`;
        cdr.detectChanges();
      });
  }
}
