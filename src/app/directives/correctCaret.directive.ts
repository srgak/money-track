import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[correctCaret]",
})
export class CorrectCaret implements OnInit {
  @HostListener("click") public moveCaret(): void {
    const { length } = this.ngControl.control?.value;
    console.log(length);

    // setTimeout(() => {
    (this.elRef.nativeElement as HTMLInputElement).setSelectionRange(
      length,
      length
    );
    // });
  }

  @HostListener("touchmove") public touchMove(): void {
    console.log("move");
    this.moveCaret();
  }

  constructor(private ngControl: NgControl, private elRef: ElementRef) {}

  ngOnInit() {
    this.ngControl.control?.valueChanges.subscribe((value) => {
      if (!value.length) {
        this.ngControl.control?.reset("0");
        this.moveCaret();
      }
    });
  }
}
