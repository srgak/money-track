import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { fromEvent, merge } from "rxjs";

@Directive({
  selector: "[correctCaret]",
})
export class CorrectCaret implements OnInit {
  private inputElement = this.elRef.nativeElement as HTMLInputElement;
  // @HostListener("input") public moveCaret(): void {
  //   const { length } = this.ngControl.control?.value;

  //   (this.elRef.nativeElement as HTMLInputElement).setSelectionRange(
  //     length,
  //     length
  //   );
  // }

  // @HostListener("touchend") public touchEnd(): void {
  //   this.moveCaret();
  // }

  // @HostListener("paste") public paste(): void {
  //   this.moveCaret();
  // }

  constructor(private ngControl: NgControl, private elRef: ElementRef) {
    merge(fromEvent(this.inputElement, "focus")).subscribe(() =>
      this.moveCaret()
    );
  }

  private moveCaret(): void {
    const { length } = this.ngControl.control?.value;

    this.inputElement.setSelectionRange(length, length);
  }

  ngOnInit() {
    this.ngControl.control?.valueChanges.subscribe((value) => {
      if (!value.length) {
        this.ngControl.control?.reset("0");
      }
    });
  }
}
