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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGUtcGlja2VyL3NyYy9saWIvZGlyZWN0aXZlcy9hY3RpdmUtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0xRixNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQW9CLEVBQWMsRUFBVSxPQUFrQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUV0RCxVQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFGMkIsQ0FBQztJQUszQyxPQUFPO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QyxDQUFDO0lBQ3FCLE1BQU07UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUMyQyxRQUFRLENBQUMsS0FBVTtRQUM3RCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUN3QixTQUFTO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ3VCLFFBQVE7UUFDOUIsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBRUgsQ0FBQzs7aUhBaENVLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO3lIQU04QixXQUFXO3NCQUF2QyxLQUFLO3VCQUFDLGFBQWE7Z0JBQ0csT0FBTztzQkFBN0IsWUFBWTt1QkFBQyxPQUFPO2dCQUlDLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTTtnQkFNd0IsUUFBUTtzQkFBbkQsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFHakIsU0FBUztzQkFBakMsWUFBWTt1QkFBQyxTQUFTO2dCQUdDLFFBQVE7c0JBQS9CLFlBQVk7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWN0aXZlSW5wdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbnRyb2w6IE5nQ29udHJvbCkge31cblxuICBwcml2YXRlIGlucHV0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gIEBJbnB1dCgnYWN0aXZlSW5wdXQnKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfYWN0aXZlJyk7XG4gICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZighdGhpcy5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LmNsb3Nlc3QoJy5pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X2FjdGl2ZScpO1xuICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCduek9uT3BlbkNoYW5nZScsIFsnJGV2ZW50J10pIG9uTnpPcGVuKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgPyB0aGlzLm9uRm9jdXMoKSA6IHRoaXMub25CbHVyKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbnpGb2N1cycpIG9uTnpGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLm9uRm9jdXMoKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCduekJsdXInKSBvbk56Qmx1cigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT50aGlzLm9uQmx1cigpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5jaGlsZHJlbi5sZW5ndGggPyB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgOiB0aGlzLmlucHV0O1xuICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgICBcbiAgfVxufVxuIl19