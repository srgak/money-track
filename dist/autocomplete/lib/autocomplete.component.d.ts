import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AutocompleteService } from './autocomplete.service';
import * as i0 from "@angular/core";
export declare class AutocompleteComponent implements OnInit, ControlValueAccessor {
    data: AutocompleteService;
    private el;
    constructor(data: AutocompleteService, el: ElementRef);
    placeholder: string;
    label: string;
    reqLink: string;
    lang: string;
    isOnlySelect: boolean;
    startControl: FormControl;
    list: string[];
    private onChange;
    private onTouch;
    private saved;
    saveValue(value: any): void;
    blur(): void;
    writeValue(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent, "input-autocomplete", never, { "placeholder": "placeholder"; "label": "label"; "reqLink": "reqLink"; "lang": "lang"; "isOnlySelect": "isOnlySelect"; }, {}, never, never>;
}
