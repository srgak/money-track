import * as i0 from '@angular/core';
import { Injectable, Directive, Input, HostListener, forwardRef, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
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

class ActiveInputDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
    }
    onFocus() {
        this.input.closest('.input').classList.add('input_active');
        this.input.placeholder = this.placeholder;
    }
    onBlur() {
        if (!this.control.value) {
            this.input.closest('.input').classList.remove('input_active');
            this.input.placeholder = '';
        }
    }
    onNzOpen(event) {
        return event ? this.onFocus() : this.onBlur();
    }
    onNzFocus() {
        this.onFocus();
    }
    onNzBlur() {
        setTimeout(() => this.onBlur());
    }
    ngAfterViewInit() {
        this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
        if (this.control.value) {
            this.onFocus();
        }
    }
}
ActiveInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ActiveInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
ActiveInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: ActiveInputDirective, selector: "[activeInput]", inputs: { placeholder: ["activeInput", "placeholder"] }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()", "nzOnOpenChange": "onNzOpen($event)", "nzFocus": "onNzFocus()", "nzBlur": "onNzBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ActiveInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[activeInput]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { placeholder: [{
                type: Input,
                args: ['activeInput']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onNzOpen: [{
                type: HostListener,
                args: ['nzOnOpenChange', ['$event']]
            }], onNzFocus: [{
                type: HostListener,
                args: ['nzFocus']
            }], onNzBlur: [{
                type: HostListener,
                args: ['nzBlur']
            }] } });

class SelectComponent {
    constructor() {
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
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SelectComponent, selector: "input-select", inputs: { placeholder: "placeholder", label: "label", list: "list" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <nz-select [formControl]=\"startControl\"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__dropdown\">\n    <nz-option *ngFor=\"let item of list;\"\n      [nzValue]=\"item.value\"\n      [nzLabel]=\"item.name\"\n      [nzHide]=\"item.hide\"></nz-option>\n  </nz-select>\n  <label>{{label}}</label>\n</div>", components: [{ type: i1$1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1$1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-select', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <nz-select [formControl]=\"startControl\"\n    [activeInput]=\"placeholder\"\n    nzDropdownClassName=\"input__dropdown\">\n    <nz-option *ngFor=\"let item of list;\"\n      [nzValue]=\"item.value\"\n      [nzLabel]=\"item.name\"\n      [nzHide]=\"item.hide\"></nz-option>\n  </nz-select>\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], list: [{
                type: Input
            }] } });

class SelectModule {
}
SelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, declarations: [SelectComponent,
        ActiveInputDirective], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule], exports: [SelectComponent] });
SelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SelectComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule
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
