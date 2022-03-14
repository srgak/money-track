import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AdditionalComponent implements OnInit {
    onResetControls: EventEmitter<boolean>;
    constructor();
    isOpen: boolean;
    change(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdditionalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdditionalComponent, "input-additional", never, {}, { "onResetControls": "onResetControls"; }, never, ["*"]>;
}
