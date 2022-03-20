import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-mask";
import * as i4 from "dist/rise-input";
export class FieldComponent {
    constructor() {
        this.maskSuffix = '';
        this.startControl = new FormControl();
    }
    writeValue(value) {
        this.startControl.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    ngOnInit() {
        this.startControl.valueChanges.subscribe(val => {
            // console.log(val);
            if (this.onChange) {
                this.onChange(val);
            }
        });
    }
}
FieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: FieldComponent, selector: "lib-field", inputs: { placeholder: "placeholder", mask: "mask", label: "label", patterns: "patterns", maskSuffix: "maskSuffix", maskThousand: "maskThousand", readonly: "readonly" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>", directives: [{ type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FieldComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input__field\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], mask: [{
                type: Input
            }], label: [{
                type: Input
            }], patterns: [{
                type: Input
            }], maskSuffix: [{
                type: Input
            }], maskThousand: [{
                type: Input
            }], readonly: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmllbGQvc3JjL2xpYi9maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWVsZC9zcmMvbGliL2ZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFnQixLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBY3RGLE1BQU0sT0FBTyxjQUFjO0lBRXpCO1FBTWdCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFJakMsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVZyQyxDQUFDO0lBY2pCLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLG9CQUFvQjtZQUNwQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzJHQWpDVSxjQUFjOytGQUFkLGNBQWMsOE1BUmQ7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDN0MsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQ2JILHNVQVdNOzJGRElPLGNBQWM7a0JBWjFCLFNBQVM7K0JBQ0UsV0FBVyxVQUViLEVBQUUsYUFDQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBFQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGaWVsZENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXNrOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcGF0dGVybnM7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXNrU3VmZml4OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcHVibGljIG1hc2tUaG91c2FuZDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgcHVibGljIHN0YXJ0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgb25Ub3VjaDogRnVuY3Rpb247XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dF9fZmllbGRcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICBbZm9ybUNvbnRyb2xdPVwic3RhcnRDb250cm9sXCJcbiAgICBuei1pbnB1dFxuICAgIFttYXNrXT1cIm1hc2tcIlxuICAgIFt0aG91c2FuZFNlcGFyYXRvcl09XCJtYXNrVGhvdXNhbmRcIlxuICAgIFtzdWZmaXhdPVwibWFza1N1ZmZpeFwiXG4gICAgW2FjdGl2ZUlucHV0XT1cInBsYWNlaG9sZGVyXCJcbiAgICBbcGF0dGVybnNdPVwicGF0dGVybnNcIlxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiPlxuICA8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD5cbjwvZGl2PiJdfQ==