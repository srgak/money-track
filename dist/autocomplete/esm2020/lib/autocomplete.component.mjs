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
    constructor(data) {
        this.data = data;
        this.startControl = new FormControl();
        this.list = [];
        this.saved = '';
    }
    saveValue(value) {
        this.saved = value;
        this.list = [];
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
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i1.AutocompleteService }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AutocompleteComponent, selector: "input-autocomplete", inputs: { placeholder: "placeholder", label: "label", reqLink: "reqLink", lang: "lang" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n  <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>", components: [{ type: i2.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { type: i2.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }], directives: [{ type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput", "prefix"] }, { type: i6.TransliterationDirective, selector: "[transliteration]", inputs: ["transliteration"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-autocomplete', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AutocompleteComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input__field\">\n  <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.AutocompleteService }]; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], reqLink: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dG9jb21wbGV0ZS9zcmMvbGliL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRvY29tcGxldGUvc3JjL2xpYi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFtQixZQUFZLEVBQUUsR0FBRyxFQUFpQixNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7O0FBZXpFLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBbUIsSUFBeUI7UUFBekIsU0FBSSxHQUFKLElBQUksQ0FBcUI7UUFPckMsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUc5QyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7SUFYcUIsQ0FBQztJQWExQyxTQUFTLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUM5QjthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtZQUNELElBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxJQUFJO3FCQUNSLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztxQkFDakMsU0FBUyxDQUFDO29CQUNULElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTt3QkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUNsQixDQUFDO29CQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7d0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUMzQixDQUFDO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztrSEF2RFUscUJBQXFCO3NHQUFyQixxQkFBcUIsdUlBUnJCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDcEQsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQ2ZILG85QkF5Qk07MkZEUk8scUJBQXFCO2tCQVpqQyxTQUFTOytCQUNFLG9CQUFvQixVQUV0QixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBHQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGRlYm91bmNlVGltZSwgbWFwLCBvZiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9jb21wbGV0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogQXV0b2NvbXBsZXRlU2VydmljZSkgeyB9XG5cbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcmVxTGluazogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGFuZzogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGFydENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2g6IEZ1bmN0aW9uO1xuICBwdWJsaWMgbGlzdDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzYXZlZDogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIHNhdmVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2F2ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICBtYXAodmFsID0+ICF2YWwgPyAnJyA6IHZhbCksXG4gICAgICAgIG1hcCh2YWwgPT4gdmFsLnRvTG93ZXJDYXNlKCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsICE9PSB0aGlzLnNhdmVkLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICB0aGlzLmRhdGFcbiAgICAgICAgICAuZ2V0U29ydGVkTmFtZXModGhpcy5yZXFMaW5rLCB2YWwpXG4gICAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB2YWwgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMubGlzdCA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuaXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaW5wdXRfX2ZpZWxkXCI+XG4gIDxpbnB1dCBuei1pbnB1dFxuICAgIFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgIFtuekF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICBbYWN0aXZlSW5wdXRdPVwicGxhY2Vob2xkZXJcIlxuICAgIG1hc2s9XCJBKlwiXG4gICAgW3RyYW5zbGl0ZXJhdGlvbl09XCJsYW5nXCI+XG4gIDxuei1hdXRvY29tcGxldGUgI2F1dG9cbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJpbnB1dF9fZHJvcGRvd25cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEuaXNMb2FkaW5nOyBlbHNlIHN0YXR1c1wiPlxuICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7XCJcbiAgICAgICAgW256VmFsdWVdPVwiaXRlbVwiXG4gICAgICAgIChjbGljayk9XCJzYXZlVmFsdWUoaXRlbSlcIj57e2l0ZW19fTwvbnotYXV0by1vcHRpb24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXM+XG4gICAgICA8bnotYXV0by1vcHRpb24gbnpEaXNhYmxlZD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFkYXRhLmlzRXJyb3I7IGVsc2UgZXJyb3JcIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2xvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2Vycm9yXCI+0JLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotYXV0by1vcHRpb24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1hdXRvY29tcGxldGU+XG4gIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxuPC9kaXY+Il19