import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  forwardRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

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
export class MinutesFieldComponent implements ControlValueAccessor, OnInit {
  // public minutesValue!: string;
  public minutesField: FormControl = new FormControl("");

  constructor(private cdr: ChangeDetectorRef) {}

  private onChange(_: number): void {}

  public writeValue(value: string): void {
    // this.cdr.markForCheck();
    this.minutesField.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(_: any): void {}

  ngOnInit(): void {
    this.minutesField.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
}
