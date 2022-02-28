import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ActiveInputDirective } from './directives/active-input.directive';
import { SelectComponent } from './select.component';
import * as i0 from "@angular/core";
export class SelectModule {
}
SelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, declarations: [SelectComponent,
        ActiveInputDirective], imports: [BrowserModule,
        ReactiveFormsModule,
        NzSelectModule], exports: [SelectComponent] });
SelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SelectModule, imports: [[
            BrowserModule,
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
                        BrowserModule,
                        ReactiveFormsModule,
                        NzSelectModule
                    ],
                    exports: [
                        SelectComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFrQnJELE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBWnJCLGVBQWU7UUFDZixvQkFBb0IsYUFHcEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFjLGFBR2QsZUFBZTswR0FHTixZQUFZLFlBVGQ7WUFDUCxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGNBQWM7U0FDZjsyRkFLVSxZQUFZO2tCQWR4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBBY3RpdmVJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hY3RpdmUtaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgQWN0aXZlSW5wdXREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOelNlbGVjdE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2VsZWN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TW9kdWxlIHsgfVxuIl19