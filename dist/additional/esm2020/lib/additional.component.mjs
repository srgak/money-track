import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
export class AdditionalComponent {
    constructor() {
        this.onResetControls = new EventEmitter();
        this.isOpen = false;
    }
    change() {
        this.onResetControls.emit(this.isOpen);
    }
    ngOnInit() {
    }
}
AdditionalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AdditionalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: AdditionalComponent, selector: "input-additional", outputs: { onResetControls: "onResetControls" }, ngImport: i0, template: "<div class=\"col-12\">\n  <label nz-checkbox\n  [(ngModel)]=\"isOpen\"\n  (ngModelChange)=\"change()\">\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</label>\n</div>\n<ng-content *ngIf=\"isOpen\"></ng-content>", components: [{ type: i1.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AdditionalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-additional', styles: [], template: "<div class=\"col-12\">\n  <label nz-checkbox\n  [(ngModel)]=\"isOpen\"\n  (ngModelChange)=\"change()\">\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</label>\n</div>\n<ng-content *ngIf=\"isOpen\"></ng-content>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { onResetControls: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb25hbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRpdGlvbmFsL3NyYy9saWIvYWRkaXRpb25hbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRpdGlvbmFsL3NyYy9saWIvYWRkaXRpb25hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3hFLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFGVSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJakQsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUZmLENBQUM7SUFJVixNQUFNO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Z0hBYlUsbUJBQW1CO29HQUFuQixtQkFBbUIseUdDUGhDLG1QQUt3QzsyRkRFM0IsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGtCQUFrQixVQUVwQixFQUFFOzBFQUlBLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtYWRkaXRpb25hbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRpdGlvbmFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRpdGlvbmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgb25SZXNldENvbnRyb2xzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5vblJlc2V0Q29udHJvbHMuZW1pdCh0aGlzLmlzT3Blbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gIDxsYWJlbCBuei1jaGVja2JveFxuICBbKG5nTW9kZWwpXT1cImlzT3BlblwiXG4gIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgpXCI+0JrQsNC/0LjRgtCw0LvQuNC30LDRhtC40Y88L2xhYmVsPlxuPC9kaXY+XG48bmctY29udGVudCAqbmdJZj1cImlzT3BlblwiPjwvbmctY29udGVudD4iXX0=