import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ActiveInputDirective } from './directives/active-input.directive';
import { SelectComponent } from './select.component';
import * as i0 from "@angular/core";
export class SelectModule {
}
SelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, declarations: [SelectComponent,
        ActiveInputDirective], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule], exports: [SelectComponent] });
SelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SelectComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule
                    ],
                    exports: [
                        SelectComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFrQnJELE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBWnJCLGVBQWU7UUFDZixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjLGFBR2QsZUFBZTswR0FHTixZQUFZLFlBVGQ7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7U0FDZjsyRkFLVSxZQUFZO2tCQWR4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgQWN0aXZlSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWN0aXZlLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIEFjdGl2ZUlucHV0RGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOelNlbGVjdE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2VsZWN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TW9kdWxlIHsgfVxuIl19