import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AutocompleteService } from './autocomplete.service';
import * as i0 from "@angular/core";
export declare class AutocompleteComponent implements OnInit, ControlValueAccessor {
    data: AutocompleteService;
    constructor(data: AutocompleteService);
    placeholder: string;
    label: string;
    reqLink: string;
    startControl: FormControl;
    private onChange;
    private onTouch;
    list: string[];
    private searchChanges;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    search(value: string): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent, "input-autocomplete", never, { "placeholder": "placeholder"; "label": "label"; "reqLink": "reqLink"; }, {}, never, never>;
}
