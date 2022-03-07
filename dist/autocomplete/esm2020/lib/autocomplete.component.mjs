import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, debounceTime, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./autocomplete.service";
import * as i2 from "ng-zorro-antd/select";
import * as i3 from "@angular/forms";
import * as i4 from "dist/rise-input";
import * as i5 from "@angular/common";
export class AutocompleteComponent {
    constructor(data) {
        this.data = data;
        this.startControl = new FormControl();
        this.list = [];
        this.searchChanges = new BehaviorSubject('');
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
    search(value) {
        this.searchChanges.next(value);
    }
    ngOnInit() {
        this.startControl.valueChanges
            .subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
        });
        this.searchChanges
            .asObservable()
            .pipe(debounceTime(300), map(val => val.toLowerCase()))
            .subscribe(val => {
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
        });
    }
}
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i1.AutocompleteService }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AutocompleteComponent, selector: "input-autocomplete", inputs: { placeholder: "placeholder", label: "label", reqLink: "reqLink" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <nz-select [formControl]=\"startControl\"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__dropdown\"\n    nzAllowClear\n    nzShowSearch\n    nzServerSearch\n    (nzOnSearch)=\"search($event)\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-option *ngFor=\"let item of list;\"\n      [nzValue]=\"item\"\n      [nzLabel]=\"item\"></nz-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-option nzDisabled\n        nzCustomContent>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-option>\n    </ng-template>\n  </nz-select>\n  <label>{{label}}</label>\n</div>", components: [{ type: i2.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i2.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-autocomplete', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AutocompleteComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <nz-select [formControl]=\"startControl\"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__dropdown\"\n    nzAllowClear\n    nzShowSearch\n    nzServerSearch\n    (nzOnSearch)=\"search($event)\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-option *ngFor=\"let item of list;\"\n      [nzValue]=\"item\"\n      [nzLabel]=\"item\"></nz-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-option nzDisabled\n        nzCustomContent>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-option>\n    </ng-template>\n  </nz-select>\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.AutocompleteService }]; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], reqLink: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dG9jb21wbGV0ZS9zcmMvbGliL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRvY29tcGxldGUvc3JjL2xpYi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFpQixNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQWV6RSxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLFlBQW1CLElBQXlCO1FBQXpCLFNBQUksR0FBSixJQUFJLENBQXFCO1FBTXJDLGlCQUFZLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHOUMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBVkEsQ0FBQztJQVlqRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsYUFBYTthQUNmLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUM5QjthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztpQkFDakMsU0FBUyxDQUFDO2dCQUNULElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztrSEF2RFUscUJBQXFCO3NHQUFyQixxQkFBcUIseUhBUnJCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDcEQsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQ2ZILGc2QkF5Qk07MkZEUk8scUJBQXFCO2tCQVpqQyxTQUFTOytCQUNFLG9CQUFvQixVQUV0QixFQUFFLGFBQ0M7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBHQU1lLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBkZWJvdW5jZVRpbWUsIG1hcCwgb2YsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvY29tcGxldGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IEF1dG9jb21wbGV0ZVNlcnZpY2UpIHsgfVxuXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHJlcUxpbms6IHN0cmluZztcblxuICBwdWJsaWMgc3RhcnRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoOiBGdW5jdGlvbjtcbiAgcHVibGljIGxpc3Q6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc2VhcmNoQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRDb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hDaGFuZ2VzLm5leHQodmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zZWFyY2hDaGFuZ2VzXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgbWFwKHZhbCA9PiB2YWwudG9Mb3dlckNhc2UoKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5kYXRhXG4gICAgICAgICAgLmdldFNvcnRlZE5hbWVzKHRoaXMucmVxTGluaywgdmFsKVxuICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdmFsID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmxpc3QgPSB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICA8bnotc2VsZWN0IFtmb3JtQ29udHJvbF09XCJzdGFydENvbnRyb2xcIlxuICAgIFthY3RpdmVJbnB1dF09XCJwbGFjZWhvbGRlclwiXG4gICAgbnpEcm9wZG93bkNsYXNzTmFtZT1cImlucHV0X19kcm9wZG93blwiXG4gICAgbnpBbGxvd0NsZWFyXG4gICAgbnpTaG93U2VhcmNoXG4gICAgbnpTZXJ2ZXJTZWFyY2hcbiAgICAobnpPblNlYXJjaCk9XCJzZWFyY2goJGV2ZW50KVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGF0YS5pc0xvYWRpbmc7IGVsc2Ugc3RhdHVzXCI+XG4gICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7XCJcbiAgICAgIFtuelZhbHVlXT1cIml0ZW1cIlxuICAgICAgW256TGFiZWxdPVwiaXRlbVwiPjwvbnotb3B0aW9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjc3RhdHVzPlxuICAgICAgPG56LW9wdGlvbiBuekRpc2FibGVkXG4gICAgICAgIG56Q3VzdG9tQ29udGVudD5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFkYXRhLmlzRXJyb3I7IGVsc2UgZXJyb3JcIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2xvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3N0YXR1cyBpbnB1dF9fc3RhdHVzX2Vycm9yXCI+0JLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotb3B0aW9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbnotc2VsZWN0PlxuICA8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD5cbjwvZGl2PiJdfQ==