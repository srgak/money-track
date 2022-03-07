import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class RiseInputDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.input = this.el.nativeElement;
    }
    onFocus() {
        this.input.closest('.input').classList.add('input_active');
        this.input.placeholder = this.input.parentNode.nextSibling && this.input.parentNode.nextSibling.innerText ? '' : this.placeholder;
    }
    onBlur() {
        if (!this.control.value) {
            this.input.closest('.input').classList.remove('input_active');
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
        setTimeout(() => this.onBlur());
    }
    ngAfterViewInit() {
        this.input = this.input.children.length ? this.input.querySelector('input') : this.input;
        if (this.control.value) {
            this.onFocus();
        }
    }
}
RiseInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
RiseInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.0", type: RiseInputDirective, selector: "[activeInput]", inputs: { placeholder: ["activeInput", "placeholder"] }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()", "nzOnOpenChange": "onNzOpen($event)", "nzFocus": "onNzFocus()", "nzBlur": "onNzBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: RiseInputDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlzZS1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yaXNlLWlucHV0L3NyYy9saWIvcmlzZS1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTFGLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsRUFBYyxFQUFVLE9BQWtCO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRXRELFVBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUYyQixDQUFDO0lBSzNDLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3BJLENBQUM7SUFDcUIsTUFBTTtRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNuSCxDQUFDO0lBQzJDLFFBQVEsQ0FBQyxLQUFVO1FBQzdELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ3dCLFNBQVM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDdUIsUUFBUTtRQUM5QixVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekYsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFFSCxDQUFDOzsrR0FqQ1Usa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7eUhBTThCLFdBQVc7c0JBQXZDLEtBQUs7dUJBQUMsYUFBYTtnQkFDRyxPQUFPO3NCQUE3QixZQUFZO3VCQUFDLE9BQU87Z0JBSUMsTUFBTTtzQkFBM0IsWUFBWTt1QkFBQyxNQUFNO2dCQU93QixRQUFRO3NCQUFuRCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUdqQixTQUFTO3NCQUFqQyxZQUFZO3VCQUFDLFNBQVM7Z0JBR0MsUUFBUTtzQkFBL0IsWUFBWTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY3RpdmVJbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIFJpc2VJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbnRyb2w6IE5nQ29udHJvbCkge31cblxuICBwcml2YXRlIGlucHV0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gIEBJbnB1dCgnYWN0aXZlSW5wdXQnKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfYWN0aXZlJyk7XG4gICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuaW5wdXQucGFyZW50Tm9kZS5uZXh0U2libGluZyAmJiB0aGlzLmlucHV0LnBhcmVudE5vZGUubmV4dFNpYmxpbmcuaW5uZXJUZXh0ID8gJycgOiB0aGlzLnBsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuY29udHJvbC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9hY3RpdmUnKTtcbiAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICB9XG4gICAgaWYodGhpcy5pbnB1dC5wYXJlbnROb2RlLm5leHRTaWJsaW5nICYmIHRoaXMuaW5wdXQucGFyZW50Tm9kZS5uZXh0U2libGluZy5pbm5lclRleHQpIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgfVxuICBASG9zdExpc3RlbmVyKCduek9uT3BlbkNoYW5nZScsIFsnJGV2ZW50J10pIG9uTnpPcGVuKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgPyB0aGlzLm9uRm9jdXMoKSA6IHRoaXMub25CbHVyKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbnpGb2N1cycpIG9uTnpGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLm9uRm9jdXMoKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCduekJsdXInKSBvbk56Qmx1cigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT50aGlzLm9uQmx1cigpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5jaGlsZHJlbi5sZW5ndGggPyB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgOiB0aGlzLmlucHV0O1xuICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgICBcbiAgfVxufVxuIl19