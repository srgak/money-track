import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input";
import * as i2 from "@angular/forms";
import * as i3 from "dist/rise-input";
import * as i4 from "ng-zorro-antd/icon";
export class PasswordComponent {
    constructor() {
        this.startControl = new FormControl();
        this.passwordVisible = false;
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
PasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: PasswordComponent, selector: "input-password", inputs: { placeholder: "placeholder", label: "label" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n    <input [type]=\"passwordVisible ? 'text' : 'password'\"\n      [formControl]=\"startControl\"\n      nz-input\n      [activeInput]=\"placeholder\">\n      <label>{{label}}</label>\n  </nz-input-group>\n  <ng-template #suffixTemplate>\n    <i nz-icon\n      [nzType]=\"'eye'\"\n      (click)=\"passwordVisible = !passwordVisible\"></i>\n  </ng-template>\n</div>", components: [{ type: i1.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }], directives: [{ type: i1.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-password', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PasswordComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input__field\">\n  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n    <input [type]=\"passwordVisible ? 'text' : 'password'\"\n      [formControl]=\"startControl\"\n      nz-input\n      [activeInput]=\"placeholder\">\n      <label>{{label}}</label>\n  </nz-input-group>\n  <ng-template #suffixTemplate>\n    <i nz-icon\n      [nzType]=\"'eye'\"\n      (click)=\"passwordVisible = !passwordVisible\"></i>\n  </ng-template>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFzc3dvcmQvc3JjL2xpYi9wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXNzd29yZC9zcmMvbGliL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFldEYsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QjtRQUtPLGlCQUFZLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHOUMsb0JBQWUsR0FBWSxLQUFLLENBQUM7SUFSeEIsQ0FBQztJQVVqQixVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhHQTVCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixpR0FSakI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUNoRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDZEgsOGJBYU07MkZER08saUJBQWlCO2tCQVo3QixTQUFTOytCQUNFLGdCQUFnQixVQUVsQixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBFQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFzc3dvcmRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblxuICBwdWJsaWMgc3RhcnRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoOiBGdW5jdGlvbjtcbiAgcHVibGljIHBhc3N3b3JkVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dF9fZmllbGRcIj5cbiAgPG56LWlucHV0LWdyb3VwIFtuelN1ZmZpeF09XCJzdWZmaXhUZW1wbGF0ZVwiPlxuICAgIDxpbnB1dCBbdHlwZV09XCJwYXNzd29yZFZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgICAgbnotaW5wdXRcbiAgICAgIFthY3RpdmVJbnB1dF09XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPGxhYmVsPnt7bGFiZWx9fTwvbGFiZWw+XG4gIDwvbnotaW5wdXQtZ3JvdXA+XG4gIDxuZy10ZW1wbGF0ZSAjc3VmZml4VGVtcGxhdGU+XG4gICAgPGkgbnotaWNvblxuICAgICAgW256VHlwZV09XCInZXllJ1wiXG4gICAgICAoY2xpY2spPVwicGFzc3dvcmRWaXNpYmxlID0gIXBhc3N3b3JkVmlzaWJsZVwiPjwvaT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==