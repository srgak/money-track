import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./autocomplete.service";
import * as i2 from "ng-zorro-antd/auto-complete";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@angular/forms";
import * as i5 from "dist/rise-input";
import * as i6 from "dist/transliteration";
import * as i7 from "@angular/common";
export class AutocompleteComponent {
    constructor(data, el) {
        this.data = data;
        this.el = el;
        this.isOnlySelect = false;
        this.startControl = new FormControl();
        this.list = [];
        this.saved = '';
    }
    saveValue(value) {
        this.saved = value;
        this.list = [];
    }
    blur() {
        if (this.isOnlySelect && this.startControl.value !== this.saved)
            this.startControl.reset();
    }
    writeValue(value) {
        this.startControl.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    ngOnInit() {
        this.startControl.valueChanges
            .pipe(debounceTime(300), map(val => !val ? '' : val), map(val => val.toLowerCase()))
            .subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
            if (val !== this.saved.toLowerCase()) {
                this.data
                    .getSortedNames(this.reqLink, val)
                    .subscribe({
                    next: val => {
                        this.data.isLoading = false;
                        this.list = val;
                    },
                    error: () => {
                        this.data.isError = true;
                    }
                });
            }
        });
    }
}
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i1.AutocompleteService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AutocompleteComponent, selector: "input-autocomplete", inputs: { placeholder: "placeholder", label: "label", reqLink: "reqLink", lang: "lang", isOnlySelect: "isOnlySelect" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n    <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\"\n    (blur)=\"blur()\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>", components: [{ type: i2.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { type: i2.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }], directives: [{ type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput", "prefix"] }, { type: i6.TransliterationDirective, selector: "[transliteration]", inputs: ["transliteration"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-autocomplete', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AutocompleteComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input__field\">\n    <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\"\n    (blur)=\"blur()\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.AutocompleteService }, { type: i0.ElementRef }]; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], reqLink: [{
                type: Input
            }], lang: [{
                type: Input
            }], isOnlySelect: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dG9jb21wbGV0ZS9zcmMvbGliL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRvY29tcGxldGUvc3JjL2xpYi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxVQUFVLEVBQWdCLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBbUIsWUFBWSxFQUFFLEdBQUcsRUFBaUIsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQWV6RSxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLFlBQW1CLElBQXlCLEVBQVUsRUFBYztRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFxQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFNcEQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFdkMsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBR25CLFVBQUssR0FBVyxFQUFFLENBQUM7SUFaNkMsQ0FBQztJQWNsRSxTQUFTLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWTthQUMzQixJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQzlCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsSUFBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUk7cUJBQ04sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO3FCQUNqQyxTQUFTLENBQUM7b0JBQ1QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO3dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2xCLENBQUM7b0JBQ0QsS0FBSyxFQUFFLEdBQUcsRUFBRTt3QkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQzNCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ047UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2tIQTVEVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixxS0FSckI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDZkgsNitCQTBCTTsyRkRUTyxxQkFBcUI7a0JBWmpDLFNBQVM7K0JBQ0Usb0JBQW9CLFVBRXRCLEVBQUUsYUFDQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7bUlBTWUsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGRlYm91bmNlVGltZSwgbWFwLCBvZiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9jb21wbGV0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogQXV0b2NvbXBsZXRlU2VydmljZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcmVxTGluazogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaXNPbmx5U2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHN0YXJ0Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIGxpc3Q6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2g6IEZ1bmN0aW9uO1xuICBwcml2YXRlIHNhdmVkOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgc2F2ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zYXZlZCA9IHZhbHVlO1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICB9XG4gIGJsdXIoKSB7XG4gICAgaWYodGhpcy5pc09ubHlTZWxlY3QgJiYgdGhpcy5zdGFydENvbnRyb2wudmFsdWUgIT09IHRoaXMuc2F2ZWQpIFxuICAgICAgdGhpcy5zdGFydENvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICBtYXAodmFsID0+ICF2YWwgPyAnJyA6IHZhbCksXG4gICAgICAgIG1hcCh2YWwgPT4gdmFsLnRvTG93ZXJDYXNlKCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsICE9PSB0aGlzLnNhdmVkLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICB0aGlzLmRhdGFcbiAgICAgICAgICAgIC5nZXRTb3J0ZWROYW1lcyh0aGlzLnJlcUxpbmssIHZhbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICBuZXh0OiB2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSB2YWw7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dF9fZmllbGRcIj5cbiAgICA8aW5wdXQgbnotaW5wdXRcbiAgICBbZm9ybUNvbnRyb2xdPVwic3RhcnRDb250cm9sXCJcbiAgICBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgW2FjdGl2ZUlucHV0XT1cInBsYWNlaG9sZGVyXCJcbiAgICBtYXNrPVwiQSpcIlxuICAgIFt0cmFuc2xpdGVyYXRpb25dPVwibGFuZ1wiXG4gICAgKGJsdXIpPVwiYmx1cigpXCI+XG4gIDxuei1hdXRvY29tcGxldGUgI2F1dG9cbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJpbnB1dF9fZHJvcGRvd25cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEuaXNMb2FkaW5nOyBlbHNlIHN0YXR1c1wiPlxuICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7XCJcbiAgICAgICAgW256VmFsdWVdPVwiaXRlbVwiXG4gICAgICAgIChjbGljayk9XCJzYXZlVmFsdWUoaXRlbSlcIj57e2l0ZW19fTwvbnotYXV0by1vcHRpb24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXM+XG4gICAgICA8bnotYXV0by1vcHRpb24gbnpEaXNhYmxlZD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFkYXRhLmlzRXJyb3I7IGVsc2UgZXJyb3JcIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2xvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2Vycm9yXCI+0JLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotYXV0by1vcHRpb24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1hdXRvY29tcGxldGU+XG4gIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxuPC9kaXY+Il19