import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
export class AdditionalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb25hbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRpdGlvbmFsL3NyYy9saWIvYWRkaXRpb25hbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRpdGlvbmFsL3NyYy9saWIvYWRkaXRpb25hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUS9FLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUI7UUFIUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSzdCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFGZixDQUFDO0lBS1YsTUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQzs7Z0hBbEJVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDRJQ1JoQyxpTEFLd0M7MkZERzNCLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxrQkFBa0IsVUFFcEIsRUFBRTswRUFJRCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1hZGRpdGlvbmFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGl0aW9uYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFkZGl0aW9uYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzUmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250cm9sc0dyb3VwOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NoZWNrZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICBpZighdGhpcy5pc09wZW4pIHRoaXMuY29udHJvbHNHcm91cC5yZXNldCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmlzUmV2ZXJzZTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gIDxsYWJlbCBuei1jaGVja2JveFxuICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgpXCI+e3tsYWJlbH19PC9sYWJlbD5cbjwvZGl2PlxuPG5nLWNvbnRlbnQgKm5nSWY9XCJpc09wZW5cIj48L25nLWNvbnRlbnQ+Il19