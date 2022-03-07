import { NgModule } from '@angular/core';
import { FieldComponent } from './field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { RiseInputModule } from 'dist/rise-input';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class FieldModule {
}
FieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, declarations: [FieldComponent], imports: [ReactiveFormsModule,
        NzInputModule, i1.NgxMaskModule, RiseInputModule], exports: [FieldComponent] });
FieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, imports: [[
            ReactiveFormsModule,
            NzInputModule,
            NgxMaskModule.forRoot(),
            RiseInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FieldComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzInputModule,
                        NgxMaskModule.forRoot(),
                        RiseInputModule
                    ],
                    exports: [
                        FieldComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmllbGQvc3JjL2xpYi9maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFpQmxELE1BQU0sT0FBTyxXQUFXOzt3R0FBWCxXQUFXO3lHQUFYLFdBQVcsaUJBWnBCLGNBQWMsYUFHZCxtQkFBbUI7UUFDbkIsYUFBYSxvQkFFYixlQUFlLGFBR2YsY0FBYzt5R0FHTCxXQUFXLFlBVmI7WUFDUCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsZUFBZTtTQUNoQjsyRkFLVSxXQUFXO2tCQWR2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJpc2VJbnB1dE1vZHVsZSB9IGZyb20gJ2Rpc3QvcmlzZS1pbnB1dCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmllbGRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSaXNlSW5wdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZpZWxkQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRNb2R1bGUgeyB9XG4iXX0=