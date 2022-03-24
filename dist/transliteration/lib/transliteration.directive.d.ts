import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TransliterationDirective {
    private el;
    private control;
    constructor(el: ElementRef, control: NgControl);
    private input;
    lang: string;
    change(event: any): void;
    private translate;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransliterationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TransliterationDirective, "[transliteration]", never, { "lang": "transliteration"; }, {}, never>;
}
