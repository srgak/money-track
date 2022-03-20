import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/select";
import * as i2 from "@angular/forms";
import * as i3 from "dist/rise-input";
import * as i4 from "@angular/common";
export class SelectComponent {
    constructor() {
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
    change(event) {
        if (event === 'other') {
            console.log(event);
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SelectComponent, selector: "input-select", inputs: { placeholder: "placeholder", label: "label", list: "list" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content *ngIf=\"isShow\">\n\n</ng-content>", components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-select', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content *ngIf=\"isShow\">\n\n</ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], list: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWxlY3Qvc3JjL2xpYi9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFjdEYsTUFBTSxPQUFPLGVBQWU7SUFFMUI7UUFNTyxpQkFBWSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBTnJDLENBQUM7SUFXakIsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBRyxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7NEdBdENVLGVBQWU7Z0dBQWYsZUFBZSw2R0FSZjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUM5QyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDYkgsdWZBZ0JhOzJGRERBLGVBQWU7a0JBWjNCLFNBQVM7K0JBQ0UsY0FBYyxVQUVoQixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBFQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGlzdDtcbiAgXG4gIHB1YmxpYyBzdGFydENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2g6IEZ1bmN0aW9uO1xuICBwdWJsaWMgaXNTaG93OiBib29sZWFuO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgaWYodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZykge1xuICAgIGlmKGV2ZW50ID09PSAnb3RoZXInKSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgPGRpdiBjbGFzcz1cImlucHV0X19maWVsZFwiPlxuICAgIDxuei1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInN0YXJ0Q29udHJvbFwiXG4gICAgICBbYWN0aXZlSW5wdXRdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgbnpEcm9wZG93bkNsYXNzTmFtZT1cImlucHV0X19kcm9wZG93blwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPG56LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0O1wiXG4gICAgICAgIFtuelZhbHVlXT1cIml0ZW0udmFsdWVcIlxuICAgICAgICBbbnpMYWJlbF09XCJpdGVtLm5hbWVcIlxuICAgICAgICBbbnpIaWRlXT1cIml0ZW0uaGlkZVwiPjwvbnotb3B0aW9uPlxuICAgIDwvbnotc2VsZWN0PlxuICAgIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxuICA8L2Rpdj5cbjwvZGl2PlxuPG5nLWNvbnRlbnQgKm5nSWY9XCJpc1Nob3dcIj5cblxuPC9uZy1jb250ZW50PiJdfQ==