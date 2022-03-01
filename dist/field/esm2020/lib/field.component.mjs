import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-mask";
import * as i4 from "./directives/active-input.directive";
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
    ], ngImport: i0, template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>", directives: [{ type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FieldComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmllbGQvc3JjL2xpYi9maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWVsZC9zcmMvbGliL2ZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFjdEYsTUFBTSxPQUFPLGNBQWM7SUFFekI7UUFNZ0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUlqQyxpQkFBWSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBVnJDLENBQUM7SUFjakIsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzsyR0FoQ1UsY0FBYzsrRkFBZCxjQUFjLDhNQVJkO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzdDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkNiSCwrVEFXTTsyRkRJTyxjQUFjO2tCQVoxQixTQUFTOytCQUNFLFdBQVcsVUFFYixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjswRUFNZSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZpZWxkQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG1hc2s6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXR0ZXJucztcbiAgQElucHV0KCkgcHVibGljIG1hc2tTdWZmaXg6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgbWFza1Rob3VzYW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblxuICBwdWJsaWMgc3RhcnRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoOiBGdW5jdGlvbjtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICBbZm9ybUNvbnRyb2xdPVwic3RhcnRDb250cm9sXCJcbiAgICBuei1pbnB1dFxuICAgIFttYXNrXT1cIm1hc2tcIlxuICAgIFt0aG91c2FuZFNlcGFyYXRvcl09XCJtYXNrVGhvdXNhbmRcIlxuICAgIFtzdWZmaXhdPVwibWFza1N1ZmZpeFwiXG4gICAgW2FjdGl2ZUlucHV0XT1cInBsYWNlaG9sZGVyXCJcbiAgICBbcGF0dGVybnNdPVwicGF0dGVybnNcIlxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiPlxuICA8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD5cbjwvZGl2PiJdfQ==