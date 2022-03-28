import * as i0 from '@angular/core';
import { Directive, Input, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';

class RiseInputDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
    }
    onFocus() {
        this.input.closest('.input__field').classList.add('input_active');
        this.input.placeholder = this.input.parentNode.nextSibling && this.input.parentNode.nextSibling.innerText ? '' : this.placeholder;
    }
    onBlur() {
        if (!this.control.value) {
            this.input.closest('.input__field').classList.remove('input_active');
            this.input.placeholder = '';
        }
        if (this.input.parentNode.nextSibling && this.input.parentNode.nextSibling.innerText)
            this.input.placeholder = '';
    }
    onNzOpen(event) {
        return event ? this.onFocus() : this.onBlur();
    }
    onNzFocus() {
        this.onFocus();
    }
    onNzBlur() {
        setTimeout(() => this.onBlur(), 1000);
    }
    ngAfterViewInit() {
        this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
        if (this.control.value || this.prefix) {
            this.onFocus();
        }
    }
}
RiseInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
RiseInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: RiseInputDirective, selector: "[activeInput]", inputs: { placeholder: ["activeInput", "placeholder"], prefix: "prefix" }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()", "nzOnOpenChange": "onNzOpen($event)", "nzFocus": "onNzFocus()", "nzBlur": "onNzBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[activeInput]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { placeholder: [{
                type: Input,
                args: ['activeInput']
            }], prefix: [{
                type: Input
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

class RiseInputModule {
}
RiseInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RiseInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputModule, declarations: [RiseInputDirective], exports: [RiseInputDirective] });
RiseInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RiseInputDirective
                    ],
                    imports: [],
                    exports: [
                        RiseInputDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of rise-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RiseInputDirective, RiseInputModule };
//# sourceMappingURL=rise-input.mjs.map
