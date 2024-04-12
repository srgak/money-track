import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  forwardRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { tap } from "rxjs";

@Component({
  selector: "app-minutes-field",
  templateUrl: "./minutes-field.component.html",
  styleUrls: ["./minutes-field.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MinutesFieldComponent),
      multi: true,
    },
  ],
})
export class MinutesFieldComponent
  implements ControlValueAccessor, OnInit, AfterViewInit
{
  @ViewChild("input") public inputRef!: ElementRef;
  @ViewChild("valueEl") public valueRef!: ElementRef;
  public minutesField: FormControl = new FormControl("");

  constructor(private cdr: ChangeDetectorRef, private r2: Renderer2) {}

  private onChange(_: number): void {}

  public writeValue(value: string): void {
    this.minutesField.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(_: any): void {}

  ngOnInit(): void {
    this.minutesField.valueChanges
      .pipe(
        tap((value) => {
          if (!value.length) {
            this.minutesField.reset("0");
          }
        })
      )
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  ngAfterViewInit(): void {
    this.r2.listen(this.valueRef.nativeElement, "click", () => {
      (this.inputRef.nativeElement as HTMLInputElement).focus();
    });
  }
}
