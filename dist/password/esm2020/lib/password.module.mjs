import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ActiveInputDirective } from './directives/active-input.directive';
import { PasswordComponent } from './password.component';
import * as i0 from "@angular/core";
export class PasswordModule {
}
PasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, declarations: [PasswordComponent,
        ActiveInputDirective], imports: [ReactiveFormsModule,
        NzInputModule,
        NzIconModule], exports: [PasswordComponent] });
PasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, imports: [[
            ReactiveFormsModule,
            NzInputModule,
            NzIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: PasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PasswordComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzInputModule,
                        NzIconModule
                    ],
                    exports: [
                        PasswordComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFzc3dvcmQvc3JjL2xpYi9wYXNzd29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQWtCekQsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFadkIsaUJBQWlCO1FBQ2pCLG9CQUFvQixhQUdwQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFlBQVksYUFHWixpQkFBaUI7NEdBR1IsY0FBYyxZQVRoQjtZQUNQLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtTQUNiOzJGQUtVLGNBQWM7a0JBZDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBBY3RpdmVJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hY3RpdmUtaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgQWN0aXZlSW5wdXREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOekljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFBhc3N3b3JkQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRNb2R1bGUgeyB9XG4iXX0=