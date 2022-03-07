import { AfterViewInit, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TransliterationDirective implements AfterViewInit {
    private el;
    private control;
    constructor(el: ElementRef, control: NgControl);
    private input;
    onKeyUp(event: any): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransliterationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TransliterationDirective, "[inputTransliteration]", never, {}, {}, never>;
}
