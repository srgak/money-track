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
FieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: FieldComponent, selector: "lib-field", inputs: { placeholder: "placeholder", mask: "mask", label: "label", patterns: "patterns", maskSuffix: "maskSuffix", maskThousand: "maskThousand" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\">\n  <label>{{label}}</label>\n</div>", directives: [{ type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FieldComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\">\n  <label>{{label}}</label>\n</div>" }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmllbGQvc3JjL2xpYi9maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWVsZC9zcmMvbGliL2ZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFjdEYsTUFBTSxPQUFPLGNBQWM7SUFFekI7UUFNZ0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUdqQyxpQkFBWSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBVHJDLENBQUM7SUFhakIsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzsyR0EvQlUsY0FBYzsrRkFBZCxjQUFjLHdMQVJkO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzdDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkNiSCxrU0FVTTsyRkRLTyxjQUFjO2tCQVoxQixTQUFTOytCQUNFLFdBQVcsVUFFYixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjswRUFNZSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGaWVsZENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXNrOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcGF0dGVybnM7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXNrU3VmZml4OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcHVibGljIG1hc2tUaG91c2FuZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGFydENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2g6IEZ1bmN0aW9uO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgIFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgIG56LWlucHV0XG4gICAgW21hc2tdPVwibWFza1wiXG4gICAgW3Rob3VzYW5kU2VwYXJhdG9yXT1cIm1hc2tUaG91c2FuZFwiXG4gICAgW3N1ZmZpeF09XCJtYXNrU3VmZml4XCJcbiAgICBbYWN0aXZlSW5wdXRdPVwicGxhY2Vob2xkZXJcIlxuICAgIFtwYXR0ZXJuc109XCJwYXR0ZXJuc1wiPlxuICA8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD5cbjwvZGl2PiJdfQ==