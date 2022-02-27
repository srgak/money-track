import { NgModule } from '@angular/core';
import { FieldComponent } from './field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from 'ngx-mask';
import { ActiveInputDirective } from './directives/active-input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class FieldModule {
}
FieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, declarations: [FieldComponent,
        ActiveInputDirective], imports: [ReactiveFormsModule,
        NzInputModule, i1.NgxMaskModule], exports: [FieldComponent] });
FieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, imports: [[
            ReactiveFormsModule,
            NzInputModule,
            NgxMaskModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FieldComponent,
                        ActiveInputDirective
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzInputModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [
                        FieldComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmllbGQvc3JjL2xpYi9maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWlCckQsTUFBTSxPQUFPLFdBQVc7O3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkFacEIsY0FBYztRQUNkLG9CQUFvQixhQUdwQixtQkFBbUI7UUFDbkIsYUFBYSwrQkFJYixjQUFjO3lHQUdMLFdBQVcsWUFUYjtZQUNQLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsYUFBYSxDQUFDLE9BQU8sRUFBRTtTQUN4QjsyRkFLVSxXQUFXO2tCQWR2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XG5pbXBvcnQgeyBBY3RpdmVJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hY3RpdmUtaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgQWN0aXZlSW5wdXREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmllbGRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZE1vZHVsZSB7IH1cbiJdfQ==