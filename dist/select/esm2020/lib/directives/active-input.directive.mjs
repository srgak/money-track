import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ActiveInputDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL2RpcmVjdGl2ZXMvYWN0aXZlLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNMUYsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixFQUFjLEVBQVUsT0FBa0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFFdEQsVUFBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBRjJCLENBQUM7SUFLM0MsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQUNxQixNQUFNO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFDMkMsUUFBUSxDQUFDLEtBQVU7UUFDN0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDd0IsU0FBUztRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUN1QixRQUFRO1FBQzlCLFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6RixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUVILENBQUM7O2lIQWhDVSxvQkFBb0I7cUdBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjt5SEFNOEIsV0FBVztzQkFBdkMsS0FBSzt1QkFBQyxhQUFhO2dCQUNHLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTztnQkFJQyxNQUFNO3NCQUEzQixZQUFZO3VCQUFDLE1BQU07Z0JBTXdCLFFBQVE7c0JBQW5ELFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBR2pCLFNBQVM7c0JBQWpDLFlBQVk7dUJBQUMsU0FBUztnQkFHQyxRQUFRO3NCQUEvQixZQUFZO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjdGl2ZUlucHV0XSdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHt9XG5cbiAgcHJpdmF0ZSBpbnB1dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICBASW5wdXQoJ2FjdGl2ZUlucHV0JykgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0LmNsb3Nlc3QoJy5pbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2lucHV0X2FjdGl2ZScpO1xuICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuY29udHJvbC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9hY3RpdmUnKTtcbiAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbnpPbk9wZW5DaGFuZ2UnLCBbJyRldmVudCddKSBvbk56T3BlbihldmVudDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGV2ZW50ID8gdGhpcy5vbkZvY3VzKCkgOiB0aGlzLm9uQmx1cigpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ256Rm9jdXMnKSBvbk56Rm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5vbkZvY3VzKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbnpCbHVyJykgb25OekJsdXIoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5vbkJsdXIoKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuaW5wdXQuY2hpbGRyZW4ubGVuZ3RoID8gdGhpcy5pbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIDogdGhpcy5pbnB1dDtcbiAgICBpZiAodGhpcy5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICB9XG4gICAgXG4gIH1cbn1cbiJdfQ==