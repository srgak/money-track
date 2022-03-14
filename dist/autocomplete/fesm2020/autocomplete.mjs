import * as i0 from '@angular/core';
import { Injectable, forwardRef, Component, Input, NgModule } from '@angular/core';
import { catchError, throwError, map, of, BehaviorSubject, debounceTime } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i3 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i2 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i4 from 'dist/rise-input';
import { RiseInputModule } from 'dist/rise-input';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';

class AutocompleteService {
    constructor(http) {
        this.http = http;
    }
    getSortedNames(url, param) {
        if (param.length) {
            this.isLoading = true;
            return this.http.get(url)
                .pipe(catchError(err => throwError(() => err)), map((res) => res.map(item => item.toLowerCase())), map((data) => data.filter(item => item.startsWith(param))), map((filtered) => filtered.map(item => `${item[0].toUpperCase()}${item.substring(1)}`)));
        }
        else {
            return of([]);
        }
    }
}
AutocompleteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
AutocompleteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class AutocompleteComponent {
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
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, deps: [{ token: AutocompleteService }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: AutocompleteService }]; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], reqLink: [{
                type: Input
            }] } });

class AutocompleteModule {
}
AutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, declarations: [AutocompleteComponent], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule,
        RiseInputModule], exports: [AutocompleteComponent] });
AutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            RiseInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AutocompleteComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule,
                        RiseInputModule
                    ],
                    exports: [
                        AutocompleteComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteComponent, AutocompleteModule, AutocompleteService };
//# sourceMappingURL=autocomplete.mjs.map
