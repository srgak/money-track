import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChartComponent implements AfterViewInit {
    constructor();
    chartEl: ElementRef;
    settings: any;
    private chart;
    update(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartComponent, "lib-chart", never, { "settings": "settings"; }, {}, never, never>;
}
