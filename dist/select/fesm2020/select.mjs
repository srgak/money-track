import * as i0 from '@angular/core';
import { Injectable, EventEmitter, forwardRef, Component, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i1 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i3 from 'dist/rise-input';
import { RiseInputModule } from 'dist/rise-input';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

class SelectService {
    constructor() { }
}
SelectService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SelectService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SelectComponent {
    constructor() {
        this.onChangeTemplate = new EventEmitter();
        this.startControl = new FormControl();
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
        this.startControl.valueChanges.subscribe(val => {
            if (this.onChange) {
                this.onChange(val);
            }
        });
    }
    change(event) {
        this.onChangeTemplate.emit(this.list.filter(item => item.value === event)[0]?.otherBlock);
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SelectComponent, selector: "input-select", inputs: { placeholder: "placeholder", label: "label", list: "list" }, outputs: { onChangeTemplate: "onChangeTemplate" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>", components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.RiseInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-select', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"col-12\">\n  <div class=\"input__field\">\n    <nz-select [formControl]=\"startControl\"\n      [activeInput]=\"placeholder\"\n      nzDropdownClassName=\"input__dropdown\"\n      (ngModelChange)=\"change($event)\">\n      <nz-option *ngFor=\"let item of list;\"\n        [nzValue]=\"item.value\"\n        [nzLabel]=\"item.name\"\n        [nzHide]=\"item.hide\"></nz-option>\n    </nz-select>\n    <label>{{label}}</label>\n  </div>\n</div>\n<ng-content></ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], list: [{
                type: Input
            }], onChangeTemplate: [{
                type: Output
            }] } });

class SelectModule {
}
SelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, declarations: [SelectComponent], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule,
        RiseInputModule], exports: [SelectComponent] });
SelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            RiseInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SelectComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule,
                        RiseInputModule
                    ],
                    exports: [
                        SelectComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of select
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SelectComponent, SelectModule, SelectService };
//# sourceMappingURL=select.mjs.map
