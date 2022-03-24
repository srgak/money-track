import { Component, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import * as i0 from "@angular/core";
export class ChartComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQvc3JjL2xpYi9jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC9zcmMvbGliL2NoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDOztBQU9sQyxNQUFNLE9BQU8sY0FBYztJQUV6QixnQkFBZ0IsQ0FBQztJQU1WLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7MkdBZFUsY0FBYzsrRkFBZCxjQUFjLHVMQ1IzQiw0QkFBMEI7MkZEUWIsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXLFVBRWIsRUFBRTswRUFNWSxPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVM7Z0JBQ1gsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJ2NoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQFZpZXdDaGlsZCgnY2hhcnRFbCcpIGNoYXJ0RWw6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNldHRpbmdzO1xuXG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmNoYXJ0RWwubmF0aXZlRWxlbWVudCwgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxufVxuIiwiPGNhbnZhcyAjY2hhcnRFbD48L2NhbnZhcz4iXX0=