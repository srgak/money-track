import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var keys;
(function (keys) {
    keys["q"] = "\u0439";
    keys["w"] = "\u0446";
    keys["e"] = "\u0443";
    keys["r"] = "\u043A";
    keys["t"] = "\u0435";
    keys["y"] = "\u043D";
    keys["u"] = "\u0433";
    keys["i"] = "\u0448";
    keys["o"] = "\u0449";
    keys["p"] = "\u0437";
    keys["["] = "\u0445";
    keys["]"] = "\u044A";
    keys["a"] = "\u0444";
    keys["s"] = "\u044B";
    keys["d"] = "\u0432";
    keys["f"] = "\u0430";
    keys["g"] = "\u043F";
    keys["h"] = "\u0440";
    keys["j"] = "\u043E";
    keys["k"] = "\u043B";
    keys["l"] = "\u0434";
    keys[":"] = "\u0436";
    keys["'"] = "\u044D";
    keys["\\"] = "";
    keys["z"] = "\u044F";
    keys["x"] = "\u0447";
    keys["c"] = "\u0441";
    keys["v"] = "\u043C";
    keys["b"] = "\u0438";
    keys["n"] = "\u0442";
    keys["m"] = "\u044C";
    keys[","] = "\u0431";
    keys["."] = "\u044E";
})(keys || (keys = {}));
;
export class TransliterationDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
    }
    onKeyUp(event) {
        // console.log(event);
        const value = this.input.value;
        const key = keys[event.key] || '';
        this.input.value = value.replace(/[a-zA-Z0-9]/, '') + key;
        // this.control.control.setValue(value.replace(/[a-zA-Z0-9]/, '') + key);
        // console.log(this.control.value);
    }
    ngAfterViewInit() {
        this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
    }
}
TransliterationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
TransliterationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: TransliterationDirective, selector: "[inputTransliteration]", host: { listeners: { "keyup": "onKeyUp($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TransliterationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[inputTransliteration]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsaXRlcmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dG9jb21wbGV0ZS9zcmMvbGliL3RyYW5zbGl0ZXJhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQTBCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRy9GLElBQUssSUFrQ0o7QUFsQ0QsV0FBSyxJQUFJO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFTLENBQUE7SUFDVCxvQkFBUyxDQUFBO0lBQ1Qsb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQVMsQ0FBQTtJQUNULG9CQUFVLENBQUE7SUFDVixlQUFTLENBQUE7SUFDVCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQU8sQ0FBQTtJQUNQLG9CQUFPLENBQUE7SUFDUCxvQkFBTyxDQUFBO0lBQ1Asb0JBQVMsQ0FBQTtJQUNULG9CQUFTLENBQUE7QUFDWCxDQUFDLEVBbENJLElBQUksS0FBSixJQUFJLFFBa0NSO0FBQUEsQ0FBQztBQUlGLE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsWUFBb0IsRUFBYyxFQUFVLE9BQWtCO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRXRELFVBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUY0QixDQUFDO0lBSWhDLE9BQU8sQ0FBQyxLQUFVO1FBQ25ELHNCQUFzQjtRQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUQseUVBQXlFO1FBQ3pFLG1DQUFtQztJQUNyQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzRixDQUFDOztxSEFsQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzt5SEFPb0MsT0FBTztzQkFBekMsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOZ0NvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5lbnVtIGtleXMge1xuICBxID0gJ9C5JyxcbiAgdyA9ICfRhicsXG4gIGUgPSAn0YMnLFxuICByID0gJ9C6JyxcbiAgdCA9ICfQtScsXG4gIHkgPSAn0L0nLFxuICB1ID0gJ9CzJyxcbiAgaSA9ICfRiCcsXG4gIG8gPSAn0YknLFxuICBwID0gJ9C3JyxcbiAgJ1snID0gJ9GFJyxcbiAgJ10nID0gJ9GKJyxcbiAgYSA9ICfRhCcsXG4gIHMgPSAn0YsnLFxuICBkID0gJ9CyJyxcbiAgZiA9ICfQsCcsXG4gIGcgPSAn0L8nLFxuICBoID0gJ9GAJyxcbiAgaiA9ICfQvicsXG4gIGsgPSAn0LsnLFxuICBsID0gJ9C0JyxcbiAgJzonID0gJ9C2JyxcbiAgJ1xcJycgPSAn0Y0nLFxuICAnXFxcXCcgPSAnJyxcbiAgeiA9ICfRjycsXG4gIHggPSAn0YcnLFxuICBjID0gJ9GBJyxcbiAgdiA9ICfQvCcsXG4gIGIgPSAn0LgnLFxuICBuID0gJ9GCJyxcbiAgbSA9ICfRjCcsXG4gICcsJyA9ICfQsScsXG4gICcuJyA9ICfRjidcbn07XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW5wdXRUcmFuc2xpdGVyYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xpdGVyYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbnRyb2w6IE5nQ29udHJvbCkgeyB9XG5cbiAgcHJpdmF0ZSBpbnB1dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXAoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tldmVudC5rZXldIHx8ICcnO1xuXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1thLXpBLVowLTldLywgJycpICsga2V5O1xuICAgIC8vIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKHZhbHVlLnJlcGxhY2UoL1thLXpBLVowLTldLywgJycpICsga2V5KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmlucHV0LmNoaWxkcmVuLmxlbmd0aCA/IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKSA6IHRoaXMuaW5wdXQ7XG4gIH1cblxufVxuIl19