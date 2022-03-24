import * as i0 from '@angular/core';
import { Directive, Input, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';

var keyListRu;
(function (keyListRu) {
    keyListRu["q"] = "\u0439";
    keyListRu["w"] = "\u0446";
    keyListRu["e"] = "\u0443";
    keyListRu["r"] = "\u043A";
    keyListRu["t"] = "\u0435";
    keyListRu["y"] = "\u043D";
    keyListRu["u"] = "\u0433";
    keyListRu["i"] = "\u0448";
    keyListRu["o"] = "\u0449";
    keyListRu["p"] = "\u0437";
    keyListRu["["] = "\u0445";
    keyListRu["]"] = "\u044A";
    keyListRu["a"] = "\u0444";
    keyListRu["s"] = "\u044B";
    keyListRu["d"] = "\u0432";
    keyListRu["f"] = "\u0430";
    keyListRu["g"] = "\u043F";
    keyListRu["h"] = "\u0440";
    keyListRu["j"] = "\u043E";
    keyListRu["k"] = "\u043B";
    keyListRu["l"] = "\u0434";
    keyListRu[";"] = "\u0436";
    keyListRu["'"] = "\u044D";
    keyListRu["z"] = "\u044F";
    keyListRu["x"] = "\u0447";
    keyListRu["c"] = "\u0441";
    keyListRu["v"] = "\u043C";
    keyListRu["b"] = "\u0438";
    keyListRu["n"] = "\u0442";
    keyListRu["m"] = "\u044C";
    keyListRu[","] = "\u0431";
    keyListRu["."] = "\u044E";
    keyListRu["`"] = "\u0451";
    keyListRu["\\"] = "\u0451";
})(keyListRu || (keyListRu = {}));
;
var keyListEn;
(function (keyListEn) {
    keyListEn["\u0439"] = "q";
    keyListEn["\u0446"] = "w";
    keyListEn["\u0443"] = "e";
    keyListEn["\u043A"] = "r";
    keyListEn["\u0435"] = "t";
    keyListEn["\u043D"] = "y";
    keyListEn["\u0433"] = "u";
    keyListEn["\u0448"] = "i";
    keyListEn["\u0449"] = "o";
    keyListEn["\u0437"] = "p";
    keyListEn["\u0445"] = "[";
    keyListEn["\u044A"] = "]";
    keyListEn["\u0444"] = "a";
    keyListEn["\u044B"] = "s";
    keyListEn["\u0432"] = "d";
    keyListEn["\u0430"] = "f";
    keyListEn["\u043F"] = "g";
    keyListEn["\u0440"] = "h";
    keyListEn["\u043E"] = "j";
    keyListEn["\u043B"] = "k";
    keyListEn["\u0434"] = "l";
    keyListEn["\u0436"] = ";";
    keyListEn["\u044D"] = "'";
    keyListEn["\u044F"] = "z";
    keyListEn["\u0447"] = "x";
    keyListEn["\u0441"] = "c";
    keyListEn["\u043C"] = "v";
    keyListEn["\u0438"] = "b";
    keyListEn["\u0442"] = "n";
    keyListEn["\u044C"] = "m";
    keyListEn["\u0431"] = ",";
    keyListEn["\u044E"] = ".";
    keyListEn["\u0451"] = "`";
})(keyListEn || (keyListEn = {}));
;
class TransliterationDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
        this.lang = 'ru';
    }
    change(event) {
        this.control.control.setValue(this.translate(this.input.value, event.data));
    }
    translate(value, key) {
        return key
            ? value.substring(0, value.length - 1) + ((this.lang === 'en' ? keyListEn[key] : keyListRu[key]) || key)
            : value;
    }
}
TransliterationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
TransliterationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: TransliterationDirective, selector: "[transliteration]", inputs: { lang: ["transliteration", "lang"] }, host: { listeners: { "input": "change($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[transliteration]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { lang: [{
                type: Input,
                args: ['transliteration']
            }], change: [{
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
