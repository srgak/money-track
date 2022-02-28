import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DatePickerComponent implements OnInit, ControlValueAccessor {
    constructor();
    placeholder: string;
    label: string;
    disabledDate: any;
    startControl: FormControl;
    private onChange;
    private onTouch;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatePickerComponent, "input-date-picker", never, { "placeholder": "placeholder"; "label": "label"; "disabledDate": "disabledDate"; }, {}, never, never>;
}
