import * as i0 from '@angular/core';
import { Injectable, Directive, Input, HostListener, forwardRef, Component, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i1 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i4 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

class PasswordService {
    constructor() { }
}
PasswordService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PasswordService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordService, decorators: [{
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

class PasswordComponent {
    constructor() {
        this.startControl = new FormControl();
        this.passwordVisible = false;
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
PasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: PasswordComponent, selector: "input-password", inputs: { placeholder: "placeholder", label: "label" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"input\">\n  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n    <input [type]=\"passwordVisible ? 'text' : 'password'\"\n      [formControl]=\"startControl\"\n      nz-input\n      [activeInput]=\"placeholder\">\n      <label>{{label}}</label>\n  </nz-input-group>\n  <ng-template #suffixTemplate>\n    <i nz-icon\n      [nzType]=\"'eye'\"\n      (click)=\"passwordVisible = !passwordVisible\"></i>\n  </ng-template>\n</div>", components: [{ type: i1.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }], directives: [{ type: i1.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { type: i1.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: ActiveInputDirective, selector: "[activeInput]", inputs: ["activeInput"] }, { type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-password', styles: [], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PasswordComponent),
                            multi: true
                        }
                    ], template: "<div class=\"input\">\n  <nz-input-group [nzSuffix]=\"suffixTemplate\">\n    <input [type]=\"passwordVisible ? 'text' : 'password'\"\n      [formControl]=\"startControl\"\n      nz-input\n      [activeInput]=\"placeholder\">\n      <label>{{label}}</label>\n  </nz-input-group>\n  <ng-template #suffixTemplate>\n    <i nz-icon\n      [nzType]=\"'eye'\"\n      (click)=\"passwordVisible = !passwordVisible\"></i>\n  </ng-template>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

class PasswordModule {
}
PasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, declarations: [PasswordComponent,
        ActiveInputDirective], imports: [ReactiveFormsModule,
        NzInputModule,
        NzIconModule], exports: [PasswordComponent] });
PasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, imports: [[
            ReactiveFormsModule,
            NzInputModule,
            NzIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PasswordComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzInputModule,
                        NzIconModule
                    ],
                    exports: [
                        PasswordComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of password
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PasswordComponent, PasswordModule, PasswordService };
//# sourceMappingURL=password.mjs.map
