import * as i0 from '@angular/core';
import { Directive, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';

var keyList;
(function (keyList) {
    keyList["q"] = "\u0439";
    keyList["w"] = "\u0446";
    keyList["e"] = "\u0443";
    keyList["r"] = "\u043A";
    keyList["t"] = "\u0435";
    keyList["y"] = "\u043D";
    keyList["u"] = "\u0433";
    keyList["i"] = "\u0448";
    keyList["o"] = "\u0449";
    keyList["p"] = "\u0437";
    keyList["["] = "\u0445";
    keyList["]"] = "\u044A";
    keyList["a"] = "\u0444";
    keyList["s"] = "\u044B";
    keyList["d"] = "\u0432";
    keyList["f"] = "\u0430";
    keyList["g"] = "\u043F";
    keyList["h"] = "\u0440";
    keyList["j"] = "\u043E";
    keyList["k"] = "\u043B";
    keyList["l"] = "\u0434";
    keyList[";"] = "\u0436";
    keyList["'"] = "\u044D";
    keyList["z"] = "\u044F";
    keyList["x"] = "\u0447";
    keyList["c"] = "\u0441";
    keyList["v"] = "\u043C";
    keyList["b"] = "\u0438";
    keyList["n"] = "\u0442";
    keyList["m"] = "\u044C";
    keyList[","] = "\u0431";
    keyList["."] = "\u044E";
    keyList["`"] = "\u0451";
    keyList["\\"] = "\u0451";
})(keyList || (keyList = {}));
;
class TransliterationDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
    }
    change(event) {
        this.input.value = this.translate(this.input.value, event.data);
        this.control.control.setValue(this.input.value);
    }
    translate(value, key) {
        return key
            ? value.substring(0, value.length - 1) + (keyList[key] || '')
            : value;
    }
    ngAfterViewInit() {
        this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
    }
}
TransliterationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
TransliterationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: TransliterationDirective, selector: "[transliteration]", host: { listeners: { "input": "change($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[transliteration]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { change: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });

class TransliterationModule {
}
TransliterationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TransliterationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationModule, declarations: [TransliterationDirective], exports: [TransliterationDirective] });
TransliterationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TransliterationDirective
                    ],
                    imports: [],
                    exports: [
                        TransliterationDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of transliteration
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TransliterationDirective, TransliterationModule };
//# sourceMappingURL=transliteration.mjs.map
