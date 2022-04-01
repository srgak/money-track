import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/select";
import * as i2 from "@angular/forms";
import * as i3 from "dist/rise-input";
import * as i4 from "@angular/common";
;
export class SelectComponent {
    constructor() {
        this.templateList = [];
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
        this.isStringList = this.list.every(item => typeof item === 'string');
        this.startControl.valueChanges.subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
        });
        this.templateIndexList = this.list.filter(item => item.otherBlock);
    }
    change(event) {
        if (this.templateList.length) {
            this.templateList.forEach(item => item.classList.add('d-none'));
            this.templateList[this.templateIndexList.findIndex(item => item.value === event)]?.classList.remove('d-none');
        }
        if (this.controlsGroup) {
            this.controlsGroup.reset();
        }
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SelectComponent, selector: "input-select", inputs: { placeholder: "placeholder", label: "label", list: "list", controlsGroup: "controlsGroup", templateList: "templateList" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <ng-container *ngIf=\"isStringList; else objList\">\n        <nz-option *ngFor=\"let item of list\"\n          [nzValue]=\"item\"\n          [nzLabel]=\"item\"></nz-option>\n      </ng-container>\n      <ng-template #objList>\n        <nz-option *ngFor=\"let item of list;\"\n          [nzValue]=\"item.value\"\n          [nzLabel]=\"item.name\"></nz-option>\n      </ng-template>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>", components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput", "prefix"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-select', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <ng-container *ngIf=\"isStringList; else objList\">\n        <nz-option *ngFor=\"let item of list\"\n          [nzValue]=\"item\"\n          [nzLabel]=\"item\"></nz-option>\n      </ng-container>\n      <ng-template #objList>\n        <nz-option *ngFor=\"let item of list;\"\n          [nzValue]=\"item.value\"\n          [nzLabel]=\"item.name\"></nz-option>\n      </ng-template>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], list: [{
                type: Input
            }], controlsGroup: [{
                type: Input
            }], templateList: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWxlY3Qvc3JjL2xpYi9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQXlDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFNdEcsQ0FBQztBQWFGLE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBTWdCLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRXRDLGlCQUFZLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUFSckMsQ0FBQztJQWNqQixVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQy9ELEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7NEdBOUNVLGVBQWU7Z0dBQWYsZUFBZSwyS0FSZjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUM5QyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDbEJILHVzQkFvQnlCOzJGREFaLGVBQWU7a0JBWjNCLFNBQVM7K0JBQ0UsY0FBYyxVQUVoQixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBFQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbnRlcmZhY2UgTGlzdEl0ZW0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG90aGVyQmxvY2s/OiBzdHJpbmc7XG59O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGlzdDtcbiAgQElucHV0KCkgcHVibGljIGNvbnRyb2xzR3JvdXA6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlTGlzdDogRWxlbWVudFtdID0gW107XG4gIFxuICBwdWJsaWMgc3RhcnRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgaXNTdHJpbmdMaXN0OiBib29sZWFuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZUluZGV4TGlzdDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNTdHJpbmdMaXN0ID0gdGhpcy5saXN0LmV2ZXJ5KGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKTtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRlbXBsYXRlSW5kZXhMaXN0ID0gdGhpcy5saXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ub3RoZXJCbG9jayk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZykge1xuICAgIGlmKHRoaXMudGVtcGxhdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZUxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJykpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUxpc3RbXG4gICAgICAgIHRoaXMudGVtcGxhdGVJbmRleExpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gZXZlbnQpXG4gICAgICBdPy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICB9XG4gICAgaWYodGhpcy5jb250cm9sc0dyb3VwKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzR3JvdXAucmVzZXQoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICA8ZGl2IGNsYXNzPVwiaW5wdXRfX2ZpZWxkXCI+XG4gICAgPG56LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwic3RhcnRDb250cm9sXCJcbiAgICAgIFthY3RpdmVJbnB1dF09XCJwbGFjZWhvbGRlclwiXG4gICAgICBuekRyb3Bkb3duQ2xhc3NOYW1lPVwiaW5wdXRfX2Ryb3Bkb3duXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTdHJpbmdMaXN0OyBlbHNlIG9iakxpc3RcIj5cbiAgICAgICAgPG56LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0XCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJpdGVtXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJpdGVtXCI+PC9uei1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjb2JqTGlzdD5cbiAgICAgICAgPG56LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0O1wiXG4gICAgICAgICAgW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgW256TGFiZWxdPVwiaXRlbS5uYW1lXCI+PC9uei1vcHRpb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbnotc2VsZWN0PlxuICAgIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxuICA8L2Rpdj5cbjwvZGl2PlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==