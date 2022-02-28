import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PasswordComponent implements OnInit, ControlValueAccessor {
    constructor();
    placeholder: string;
    label: string;
    startControl: FormControl;
    private onChange;
    private onTouch;
    passwordVisible: boolean;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PasswordComponent, "input-password", never, { "placeholder": "placeholder"; "label": "label"; }, {}, never, never>;
}
