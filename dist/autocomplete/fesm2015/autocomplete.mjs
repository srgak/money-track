import * as i0 from '@angular/core';
import { Injectable, forwardRef, Component, Input, NgModule } from '@angular/core';
import { catchError, throwError, map, of, debounceTime } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i4 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i2 from 'ng-zorro-antd/auto-complete';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import * as i3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i5 from 'dist/rise-input';
import { RiseInputModule } from 'dist/rise-input';
import * as i6 from 'dist/transliteration';
import { TransliterationModule } from 'dist/transliteration';
import * as i7 from '@angular/common';
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
AutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, deps: [{ token: AutocompleteService }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AutocompleteComponent, selector: "input-autocomplete", inputs: { placeholder: "placeholder", label: "label", reqLink: "reqLink", lang: "lang" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input__field\">\n  <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>", components: [{ type: i2.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { type: i2.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }], directives: [{ type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i6.TransliterationDirective, selector: "[transliteration]", inputs: ["transliteration"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-autocomplete', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AutocompleteComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input__field\">\n  <input nz-input\n    [formControl]=\"startControl\"\n    [nzAutocomplete]=\"auto\"\n    [activeInput]=\"placeholder\"\n    mask=\"A*\"\n    [transliteration]=\"lang\">\n  <nz-autocomplete #auto\n    nzOverlayClassName=\"input__dropdown\">\n    <ng-container *ngIf=\"!data.isLoading; else status\">\n      <nz-auto-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item\"\n        (click)=\"saveValue(item)\">{{item}}</nz-auto-option>\n    </ng-container>\n    <ng-template #status>\n      <nz-auto-option nzDisabled>\n        <div *ngIf=\"!data.isError; else error\"\n          class=\"input__status input__status_loading\"></div>\n        <ng-template #error>\n          <div class=\"input__status input__status_error\">\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430</div>\n        </ng-template>\n      </nz-auto-option>\n    </ng-template>\n  </nz-autocomplete>\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return [{ type: AutocompleteService }]; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], reqLink: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });

class AutocompleteModule {
}
AutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, declarations: [AutocompleteComponent], imports: [CommonModule,
        ReactiveFormsModule,
        RiseInputModule,
        TransliterationModule,
        NzInputModule,
        NzAutocompleteModule], exports: [AutocompleteComponent] });
AutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            RiseInputModule,
            TransliterationModule,
            NzInputModule,
            NzAutocompleteModule
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
                        RiseInputModule,
                        TransliterationModule,
                        NzInputModule,
                        NzAutocompleteModule
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
