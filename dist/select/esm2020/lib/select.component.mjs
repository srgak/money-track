import { Component, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/select";
import * as i2 from "@angular/forms";
import * as i3 from "dist/rise-input";
import * as i4 from "@angular/common";
export class SelectComponent {
    constructor() {
        this.onChangeTemplate = new EventEmitter();
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
        this.onChangeTemplate.emit(this.list.filter(item => item.value === event)[0]?.otherBlock);
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SelectComponent, selector: "input-select", inputs: { placeholder: "placeholder", label: "label", list: "list" }, outputs: { onChangeTemplate: "onChangeTemplate" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>", components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-select', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], list: [{
                type: Input
            }], onChangeTemplate: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWxlY3Qvc3JjL2xpYi9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBY3RGLE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBS2lCLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFLGlCQUFZLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUFQckMsQ0FBQztJQVdqQixVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RixDQUFDOzs0R0FqQ1UsZUFBZTtnR0FBZixlQUFlLGdLQVJmO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQzlDLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkNiSCxrZUFjeUI7MkZEQ1osZUFBZTtrQkFaM0IsU0FBUzsrQkFDRSxjQUFjLFVBRWhCLEVBQUUsYUFDQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7MEVBTWUsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1csZ0JBQWdCO3NCQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsaXN0O1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlVGVtcGxhdGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgcHVibGljIHN0YXJ0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgb25Ub3VjaDogRnVuY3Rpb247XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZShldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5vbkNoYW5nZVRlbXBsYXRlLmVtaXQodGhpcy5saXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IGV2ZW50KVswXT8ub3RoZXJCbG9jayk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICA8ZGl2IGNsYXNzPVwiaW5wdXRfX2ZpZWxkXCI+XG4gICAgPG56LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwic3RhcnRDb250cm9sXCJcbiAgICAgIFthY3RpdmVJbnB1dF09XCJwbGFjZWhvbGRlclwiXG4gICAgICBuekRyb3Bkb3duQ2xhc3NOYW1lPVwiaW5wdXRfX2Ryb3Bkb3duXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7XCJcbiAgICAgICAgW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgIFtuekxhYmVsXT1cIml0ZW0ubmFtZVwiXG4gICAgICAgIFtuekhpZGVdPVwiaXRlbS5oaWRlXCI+PC9uei1vcHRpb24+XG4gICAgPC9uei1zZWxlY3Q+XG4gICAgPGxhYmVsPnt7bGFiZWx9fTwvbGFiZWw+XG4gIDwvZGl2PlxuPC9kaXY+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19