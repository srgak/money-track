import * as i0 from '@angular/core';
import { Injectable, forwardRef, Component, Input, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i1 from 'ng-zorro-antd/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import * as i3 from 'dist/rise-input';
import { RiseInputModule } from 'dist/rise-input';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

class DatePickerService {
    constructor() { }
}
DatePickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DatePickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DatePickerComponent {
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
}
DatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: DatePickerComponent, selector: "input-date-picker", inputs: { placeholder: "placeholder", label: "label", disabledDate: "disabledDate" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => DatePickerComponent)
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n  <nz-date-picker [formControl]=\"startControl\"\n    [nzAllowClear]=\"false\"\n    [nzDisabledDate]=\"disabledDate\"\n    nzFormat=\"dd.MM.yyyy\"\n    nzPlaceHolder=\" \"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__date-picker\"></nz-date-picker>\n    <label>{{label}}</label>\n</div>", components: [{ type: i1.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-date-picker', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => DatePickerComponent)
                        }
                    ], template: "<div class=\"input__field\">\n  <nz-date-picker [formControl]=\"startControl\"\n    [nzAllowClear]=\"false\"\n    [nzDisabledDate]=\"disabledDate\"\n    nzFormat=\"dd.MM.yyyy\"\n    nzPlaceHolder=\" \"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__date-picker\"></nz-date-picker>\n    <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], disabledDate: [{
                type: Input
            }] } });

registerLocaleData(ru);
class DatePickerModule {
}
DatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, declarations: [DatePickerComponent], imports: [ReactiveFormsModule,
        NzDatePickerModule,
        RiseInputModule], exports: [DatePickerComponent] });
DatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, providers: [{ provide: NZ_I18N, useValue: ru_RU }], imports: [[
            ReactiveFormsModule,
            NzDatePickerModule,
            RiseInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzDatePickerModule,
                        RiseInputModule
                    ],
                    providers: [{ provide: NZ_I18N, useValue: ru_RU }],
                    exports: [
                        DatePickerComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of date-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DatePickerComponent, DatePickerModule, DatePickerService };
//# sourceMappingURL=date-picker.mjs.map
