import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from 'ng-zorro-antd/checkbox';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class AdditionalService {
    constructor() { }
}
AdditionalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AdditionalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AdditionalComponent {
    constructor() {
        this.isReverse = false;
        this.isOpen = false;
    }
    change() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen)
            this.controlsGroup.reset();
    }
    ngOnInit() {
        this.isChecked = this.isReverse;
    }
}
AdditionalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AdditionalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AdditionalComponent, selector: "input-additional", inputs: { label: "label", isReverse: "isReverse", controlsGroup: "controlsGroup" }, ngImport: i0, template: "<div class=\"col-12\">\n  <label nz-checkbox\n  [(ngModel)]=\"isChecked\"\n  (ngModelChange)=\"change()\">{{label}}</label>\n</div>\n<ng-content *ngIf=\"isOpen\"></ng-content>", components: [{ type: i1.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-additional', styles: [], template: "<div class=\"col-12\">\n  <label nz-checkbox\n  [(ngModel)]=\"isChecked\"\n  (ngModelChange)=\"change()\">{{label}}</label>\n</div>\n<ng-content *ngIf=\"isOpen\"></ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], isReverse: [{
                type: Input
            }], controlsGroup: [{
                type: Input
            }] } });

class AdditionalModule {
}
AdditionalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AdditionalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalModule, declarations: [AdditionalComponent], imports: [CommonModule,
        NzCheckboxModule,
        FormsModule], exports: [AdditionalComponent] });
AdditionalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalModule, imports: [[
            CommonModule,
            NzCheckboxModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AdditionalComponent
                    ],
                    imports: [
                        CommonModule,
                        NzCheckboxModule,
                        FormsModule
                    ],
                    exports: [
                        AdditionalComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of additional
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdditionalComponent, AdditionalModule, AdditionalService };
//# sourceMappingURL=additional.mjs.map
