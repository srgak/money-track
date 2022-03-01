import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FieldComponent implements OnInit, ControlValueAccessor {
    constructor();
    placeholder: string;
    mask: string;
    label: string;
    patterns: any;
    maskSuffix: string;
    maskThousand: string;
    readonly: boolean;
    startControl: FormControl;
    private onChange;
    private onTouch;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldComponent, "lib-field", never, { "placeholder": "placeholder"; "mask": "mask"; "label": "label"; "patterns": "patterns"; "maskSuffix": "maskSuffix"; "maskThousand": "maskThousand"; "readonly": "readonly"; }, {}, never, never>;
}
