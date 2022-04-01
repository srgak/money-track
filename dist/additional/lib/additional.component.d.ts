import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AdditionalComponent implements OnInit {
    label: string;
    isReverse: boolean;
    controlsGroup: AbstractControl;
    constructor();
    isOpen: boolean;
    isChecked: boolean;
    change(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdditionalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdditionalComponent, "input-additional", never, { "label": "label"; "isReverse": "isReverse"; "controlsGroup": "controlsGroup"; }, {}, never, ["*"]>;
}
