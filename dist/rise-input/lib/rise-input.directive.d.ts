import { AfterViewInit, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RiseInputDirective implements AfterViewInit {
    private el;
    private control;
    constructor(el: ElementRef, control: NgControl);
    private input;
    placeholder: string;
    prefix: string;
    onFocus(): void;
    onBlur(): void;
    onNzOpen(event: any): void;
    onNzFocus(): void;
    onNzBlur(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RiseInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RiseInputDirective, "[activeInput]", never, { "placeholder": "activeInput"; "prefix": "prefix"; }, {}, never>;
}
