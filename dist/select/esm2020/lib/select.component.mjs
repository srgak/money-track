import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/select";
import * as i2 from "@angular/forms";
import * as i3 from "dist/rise-input";
import * as i4 from "@angular/common";
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
        this.startControl.valueChanges.subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
        });
        this.templateNameList = this.list.filter(item => item.otherBlock);
    }
    change(event) {
        if (this.templateList.length) {
            this.templateList.forEach(item => item.classList.add('d-none'));
            this.templateList[this.templateNameList.findIndex(item => item.value === event)]?.classList.remove('d-none');
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
    ], ngImport: i0, template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>", components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput", "prefix"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
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
            }], controlsGroup: [{
                type: Input
            }], templateList: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWxlY3Qvc3JjL2xpYi9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQXlDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFjdkcsTUFBTSxPQUFPLGVBQWU7SUFFMUI7UUFNZ0IsaUJBQVksR0FBYyxFQUFFLENBQUM7UUFFdEMsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVJyQyxDQUFDO0lBYWpCLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUM5RCxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7OzRHQTVDVSxlQUFlO2dHQUFmLGVBQWUsMktBUmY7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDOUMsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQ2JILGtlQWN5QjsyRkRDWixlQUFlO2tCQVozQixTQUFTOytCQUNFLGNBQWMsVUFFaEIsRUFBRSxhQUNDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjswRUFNZSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUNVLFlBQVk7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGlzdDtcbiAgQElucHV0KCkgcHVibGljIGNvbnRyb2xzR3JvdXA6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlTGlzdDogRWxlbWVudFtdID0gW107XG4gIFxuICBwdWJsaWMgc3RhcnRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZU5hbWVMaXN0O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgaWYodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50ZW1wbGF0ZU5hbWVMaXN0ID0gdGhpcy5saXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ub3RoZXJCbG9jayk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZykge1xuICAgIGlmKHRoaXMudGVtcGxhdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZUxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJykpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUxpc3RbXG4gICAgICAgIHRoaXMudGVtcGxhdGVOYW1lTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBldmVudClcbiAgICAgIF0/LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICBpZih0aGlzLmNvbnRyb2xzR3JvdXApIHtcbiAgICAgIHRoaXMuY29udHJvbHNHcm91cC5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dF9fZmllbGRcIj5cbiAgICA8bnotc2VsZWN0IFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgICAgW2FjdGl2ZUlucHV0XT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIG56RHJvcGRvd25DbGFzc05hbWU9XCJpbnB1dF9fZHJvcGRvd25cIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxuei1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdDtcIlxuICAgICAgICBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgW256TGFiZWxdPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgW256SGlkZV09XCJpdGVtLmhpZGVcIj48L256LW9wdGlvbj5cbiAgICA8L256LXNlbGVjdD5cbiAgICA8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=