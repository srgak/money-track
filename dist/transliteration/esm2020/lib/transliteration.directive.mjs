import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
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
export class TransliterationDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsaXRlcmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RyYW5zbGl0ZXJhdGlvbi9zcmMvbGliL3RyYW5zbGl0ZXJhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHM0UsSUFBSyxTQW1DSjtBQW5DRCxXQUFLLFNBQVM7SUFDWix5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQVMsQ0FBQTtJQUNULHlCQUFTLENBQUE7SUFDVCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBUyxDQUFBO0lBQ1QseUJBQVUsQ0FBQTtJQUNWLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBVSxDQUFBO0lBQ1YseUJBQVUsQ0FBQTtJQUNWLHlCQUFTLENBQUE7SUFDVCwwQkFBVSxDQUFBO0FBQ1osQ0FBQyxFQW5DSSxTQUFTLEtBQVQsU0FBUyxRQW1DYjtBQUFBLENBQUM7QUFDRixJQUFLLFNBa0NKO0FBbENELFdBQUssU0FBUztJQUNaLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBUSxDQUFBO0lBQ1IseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFPLENBQUE7SUFDUCx5QkFBTyxDQUFBO0lBQ1AseUJBQU8sQ0FBQTtJQUNQLHlCQUFRLENBQUE7SUFDUix5QkFBUSxDQUFBO0lBQ1IseUJBQU8sQ0FBQTtBQUNULENBQUMsRUFsQ0ksU0FBUyxLQUFULFNBQVMsUUFrQ2I7QUFBQSxDQUFDO0FBSUYsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFvQixFQUFjLEVBQVUsT0FBa0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFFdEQsVUFBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBRUwsU0FBSSxHQUFXLElBQUksQ0FBQztJQUpZLENBQUM7SUFNbEUsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQzFDLE9BQU8sR0FBRztZQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDeEcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7O3FIQWZVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7eUhBTWtDLElBQUk7c0JBQXBDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUV4QixNQUFNO3NCQURMLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmVudW0ga2V5TGlzdFJ1IHtcbiAgcSA9ICfQuScsXG4gIHcgPSAn0YYnLFxuICBlID0gJ9GDJyxcbiAgciA9ICfQuicsXG4gIHQgPSAn0LUnLFxuICB5ID0gJ9C9JyxcbiAgdSA9ICfQsycsXG4gIGkgPSAn0YgnLFxuICBvID0gJ9GJJyxcbiAgcCA9ICfQtycsXG4gICdbJyA9ICfRhScsXG4gICddJyA9ICfRiicsXG4gIGEgPSAn0YQnLFxuICBzID0gJ9GLJyxcbiAgZCA9ICfQsicsXG4gIGYgPSAn0LAnLFxuICBnID0gJ9C/JyxcbiAgaCA9ICfRgCcsXG4gIGogPSAn0L4nLFxuICBrID0gJ9C7JyxcbiAgbCA9ICfQtCcsXG4gICc7JyA9ICfQticsXG4gICdcXCcnID0gJ9GNJyxcbiAgeiA9ICfRjycsXG4gIHggPSAn0YcnLFxuICBjID0gJ9GBJyxcbiAgdiA9ICfQvCcsXG4gIGIgPSAn0LgnLFxuICBuID0gJ9GCJyxcbiAgbSA9ICfRjCcsXG4gICdcXCwnID0gJ9CxJyxcbiAgJ1xcLicgPSAn0Y4nLFxuICAnYCcgPSAn0ZEnLFxuICAnXFxcXCcgPSAn0ZEnXG59O1xuZW51bSBrZXlMaXN0RW4ge1xuICDQuSA9ICdxJyxcbiAg0YYgPSAndycsXG4gINGDID0gJ2UnLFxuICDQuiA9ICdyJyxcbiAg0LUgPSAndCcsXG4gINC9ID0gJ3knLFxuICDQsyA9ICd1JyxcbiAg0YggPSAnaScsXG4gINGJID0gJ28nLFxuICDQtyA9ICdwJyxcbiAg0YUgPSAnWycsXG4gINGKID0gJ10nLFxuICDRhCA9ICdhJyxcbiAg0YsgPSAncycsXG4gINCyID0gJ2QnLFxuICDQsCA9ICdmJyxcbiAg0L8gPSAnZycsXG4gINGAID0gJ2gnLFxuICDQviA9ICdqJyxcbiAg0LsgPSAnaycsXG4gINC0ID0gJ2wnLFxuICDQtiA9ICc7JyxcbiAg0Y0gPSAnXFwnJyxcbiAg0Y8gPSAneicsXG4gINGHID0gJ3gnLFxuICDRgSA9ICdjJyxcbiAg0LwgPSAndicsXG4gINC4ID0gJ2InLFxuICDRgiA9ICduJyxcbiAg0YwgPSAnbScsXG4gINCxID0gJ1xcLCcsXG4gINGOID0gJ1xcLicsXG4gINGRID0gJ2AnXG59O1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RyYW5zbGl0ZXJhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGl0ZXJhdGlvbkRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29udHJvbDogTmdDb250cm9sKSB7fVxuXG4gIHByaXZhdGUgaW5wdXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgQElucHV0KCd0cmFuc2xpdGVyYXRpb24nKSBwdWJsaWMgbGFuZzogc3RyaW5nID0gJ3J1JztcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBjaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZSh0aGlzLnRyYW5zbGF0ZSh0aGlzLmlucHV0LnZhbHVlLCBldmVudC5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZSh2YWx1ZTogc3RyaW5nLCBrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBrZXkgXG4gICAgICA/IHZhbHVlLnN1YnN0cmluZygwLCB2YWx1ZS5sZW5ndGggLSAxKSArICgodGhpcy5sYW5nID09PSAnZW4nID8ga2V5TGlzdEVuW2tleV0gOiBrZXlMaXN0UnVba2V5XSkgfHwga2V5KVxuICAgICAgOiB2YWx1ZTtcbiAgfVxufSJdfQ==