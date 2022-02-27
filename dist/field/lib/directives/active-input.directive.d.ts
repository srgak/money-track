import { AfterViewInit, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ActiveInputDirective implements AfterViewInit {
    private el;
    private control;
    constructor(el: ElementRef, control: NgControl);
    private input;
    placeholder: string;
    onFocus(): void;
    onBlur(): void;
    onNzOpen(event: any): void;
    onNzFocus(): void;
    onNzBlur(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ActiveInputDirective, "[activeInput]", never, { "placeholder": "activeInput"; }, {}, never>;
}
