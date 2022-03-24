import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SelectComponent implements OnInit, ControlValueAccessor {
    constructor();
    placeholder: string;
    label: string;
    list: any;
    onChangeTemplate: EventEmitter<string>;
    startControl: FormControl;
    private onChange;
    private onTouch;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnInit(): void;
    change(event: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "input-select", never, { "placeholder": "placeholder"; "label": "label"; "list": "list"; }, { "onChangeTemplate": "onChangeTemplate"; }, never, ["*"]>;
}
