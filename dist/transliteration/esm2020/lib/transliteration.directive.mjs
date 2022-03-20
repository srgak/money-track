import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
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
export class TransliterationDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsaXRlcmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RyYW5zbGl0ZXJhdGlvbi9zcmMvbGliL3RyYW5zbGl0ZXJhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7QUFHMUYsSUFBSyxPQW1DSjtBQW5DRCxXQUFLLE9BQU87SUFDVix1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQVMsQ0FBQTtJQUNULHVCQUFTLENBQUE7SUFDVCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBUyxDQUFBO0lBQ1QsdUJBQVUsQ0FBQTtJQUNWLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBTyxDQUFBO0lBQ1AsdUJBQU8sQ0FBQTtJQUNQLHVCQUFPLENBQUE7SUFDUCx1QkFBVSxDQUFBO0lBQ1YsdUJBQVUsQ0FBQTtJQUNWLHVCQUFTLENBQUE7SUFDVCx3QkFBVSxDQUFBO0FBQ1osQ0FBQyxFQW5DSSxPQUFPLEtBQVAsT0FBTyxRQW1DWDtBQUFBLENBQUM7QUFJRixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQW9CLEVBQWMsRUFBVSxPQUFrQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUV0RCxVQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFGMkIsQ0FBQztJQUtsRSxNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxTQUFTLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDMUMsT0FBTyxHQUFHO1lBQ1IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdELENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzRixDQUFDOztxSEFuQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjt5SEFPQyxNQUFNO3NCQURMLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmVudW0ga2V5TGlzdCB7XG4gIHEgPSAn0LknLFxuICB3ID0gJ9GGJyxcbiAgZSA9ICfRgycsXG4gIHIgPSAn0LonLFxuICB0ID0gJ9C1JyxcbiAgeSA9ICfQvScsXG4gIHUgPSAn0LMnLFxuICBpID0gJ9GIJyxcbiAgbyA9ICfRiScsXG4gIHAgPSAn0LcnLFxuICAnWycgPSAn0YUnLFxuICAnXScgPSAn0YonLFxuICBhID0gJ9GEJyxcbiAgcyA9ICfRiycsXG4gIGQgPSAn0LInLFxuICBmID0gJ9CwJyxcbiAgZyA9ICfQvycsXG4gIGggPSAn0YAnLFxuICBqID0gJ9C+JyxcbiAgayA9ICfQuycsXG4gIGwgPSAn0LQnLFxuICAnOycgPSAn0LYnLFxuICAnXFwnJyA9ICfRjScsXG4gIHogPSAn0Y8nLFxuICB4ID0gJ9GHJyxcbiAgYyA9ICfRgScsXG4gIHYgPSAn0LwnLFxuICBiID0gJ9C4JyxcbiAgbiA9ICfRgicsXG4gIG0gPSAn0YwnLFxuICAnXFwsJyA9ICfQsScsXG4gICdcXC4nID0gJ9GOJyxcbiAgJ2AnID0gJ9GRJyxcbiAgJ1xcXFwnID0gJ9GRJ1xufTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0cmFuc2xpdGVyYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xpdGVyYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHt9XG5cbiAgcHJpdmF0ZSBpbnB1dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIGNoYW5nZShldmVudCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnRyYW5zbGF0ZSh0aGlzLmlucHV0LnZhbHVlLCBldmVudC5kYXRhKTtcbiAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleSBcbiAgICAgID8gdmFsdWUuc3Vic3RyaW5nKDAsIHZhbHVlLmxlbmd0aCAtIDEpICsgKGtleUxpc3Rba2V5XSB8fCAnJylcbiAgICAgIDogdmFsdWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuaW5wdXQuY2hpbGRyZW4ubGVuZ3RoID8gdGhpcy5pbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIDogdGhpcy5pbnB1dDtcbiAgfVxufSJdfQ==