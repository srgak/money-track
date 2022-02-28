import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/date-picker";
import * as i2 from "./directives/active-input.directive";
import * as i3 from "@angular/forms";
export class DatePickerComponent {
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
        console.log(this.disabledDate);
        this.startControl.valueChanges.subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
        });
    }
}
DatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: DatePickerComponent, selector: "input-date-picker", inputs: { placeholder: "placeholder", label: "label", disabledDate: "disabledDate" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => DatePickerComponent)
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <nz-date-picker [formControl]=\"startControl\"\n    [nzAllowClear]=\"false\"\n    [nzDisabledDate]=\"disabledDate\"\n    nzFormat=\"dd.MM.yyyy\"\n    nzPlaceHolder=\" \"\n    activeInput=\"02.02.2022\"\n    nzDropdownClassName=\"input__date-picker\"></nz-date-picker>\n    <label>{{label}}</label>\n</div>", components: [{ type: i1.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }], directives: [{ type: i2.ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-date-picker', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => DatePickerComponent)
                        }
                    ], template: "<div class=\"input\">\n  <nz-date-picker [formControl]=\"startControl\"\n    [nzAllowClear]=\"false\"\n    [nzDisabledDate]=\"disabledDate\"\n    nzFormat=\"dd.MM.yyyy\"\n    nzPlaceHolder=\" \"\n    activeInput=\"02.02.2022\"\n    nzDropdownClassName=\"input__date-picker\"></nz-date-picker>\n    <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], disabledDate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGF0ZS1waWNrZXIvc3JjL2xpYi9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXRlLXBpY2tlci9zcmMvbGliL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQWN0RixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCO1FBTU8saUJBQVksR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQU5yQyxDQUFDO0lBVWpCLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0hBN0JVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGtJQVJuQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkQ7S0FDRiwwQkNiSCw0VUFTTTsyRkRNTyxtQkFBbUI7a0JBWi9CLFNBQVM7K0JBQ0UsbUJBQW1CLFVBRXJCLEVBQUUsYUFDQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzt5QkFDbkQ7cUJBQ0Y7MEVBTVEsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudClcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlO1xuXG4gIHB1YmxpYyBzdGFydENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2g6IEZ1bmN0aW9uO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzYWJsZWREYXRlKTtcbiAgICB0aGlzLnN0YXJ0Q29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgPG56LWRhdGUtcGlja2VyIFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgIFtuekFsbG93Q2xlYXJdPVwiZmFsc2VcIlxuICAgIFtuekRpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgIG56Rm9ybWF0PVwiZGQuTU0ueXl5eVwiXG4gICAgbnpQbGFjZUhvbGRlcj1cIiBcIlxuICAgIGFjdGl2ZUlucHV0PVwiMDIuMDIuMjAyMlwiXG4gICAgbnpEcm9wZG93bkNsYXNzTmFtZT1cImlucHV0X19kYXRlLXBpY2tlclwiPjwvbnotZGF0ZS1waWNrZXI+XG4gICAgPGxhYmVsPnt7bGFiZWx9fTwvbGFiZWw+XG48L2Rpdj4iXX0=