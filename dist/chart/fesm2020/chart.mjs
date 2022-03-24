import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, Input, NgModule } from '@angular/core';
import Chart from 'chart.js/auto';

class ChartService {
    constructor() { }
}
ChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ChartComponent {
    constructor() { }
    update() {
        this.chart.update();
    }
    ngAfterViewInit() {
        this.chart = new Chart(this.chartEl.nativeElement, this.settings);
    }
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: ChartComponent, selector: "lib-chart", inputs: { settings: "settings" }, viewQueries: [{ propertyName: "chartEl", first: true, predicate: ["chartEl"], descendants: true }], ngImport: i0, template: "<canvas #chartEl></canvas>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-chart', styles: [], template: "<canvas #chartEl></canvas>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { chartEl: [{
                type: ViewChild,
                args: ['chartEl']
            }], settings: [{
                type: Input
            }] } });

class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartModule, declarations: [ChartComponent], exports: [ChartComponent] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartComponent
                    ],
                    imports: [],
                    exports: [
                        ChartComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartModule, ChartService };
//# sourceMappingURL=chart.mjs.map
