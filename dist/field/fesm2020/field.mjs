import * as i0 from '@angular/core';
import { Injectable, Directive, Input, HostListener, forwardRef, Component, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i1 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i3 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';

class FieldService {
    constructor() { }
}
FieldService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FieldService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldService, decorators: [{
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
ActiveInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ActiveInputDirective, deps: [{ token: i0.ElementRef }, { token: i2.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
ActiveInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: ActiveInputDirective, selector: "[activeInput]", inputs: { placeholder: ["activeInput", "placeholder"] }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()", "nzOnOpenChange": "onNzOpen($event)", "nzFocus": "onNzFocus()", "nzBlur": "onNzBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ActiveInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[activeInput]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i2.NgControl }]; }, propDecorators: { placeholder: [{
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

class FieldComponent {
    constructor() {
        this.maskSuffix = '';
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
FieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: FieldComponent, selector: "lib-field", inputs: { placeholder: "placeholder", mask: "mask", label: "label", patterns: "patterns", maskSuffix: "maskSuffix", maskThousand: "maskThousand", readonly: "readonly" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FieldComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>", directives: [{ type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FieldComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <input type=\"text\"\n    [formControl]=\"startControl\"\n    nz-input\n    [mask]=\"mask\"\n    [thousandSeparator]=\"maskThousand\"\n    [suffix]=\"maskSuffix\"\n    [activeInput]=\"placeholder\"\n    [patterns]=\"patterns\"\n    [readonly]=\"readonly\">\n  <label>{{label}}</label>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], mask: [{
                type: Input
            }], label: [{
                type: Input
            }], patterns: [{
                type: Input
            }], maskSuffix: [{
                type: Input
            }], maskThousand: [{
                type: Input
            }], readonly: [{
                type: Input
            }] } });

class FieldModule {
}
FieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, declarations: [FieldComponent,
        ActiveInputDirective], imports: [ReactiveFormsModule,
        NzInputModule, i3.NgxMaskModule], exports: [FieldComponent] });
FieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, imports: [[
            ReactiveFormsModule,
            NzInputModule,
            NgxMaskModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FieldComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzInputModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [
                        FieldComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of field
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FieldComponent, FieldModule, FieldService };
//# sourceMappingURL=field.mjs.map
