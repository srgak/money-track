import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';
import { TransliterationModule } from 'dist/transliteration';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i0 from "@angular/core";
export class AutocompleteModule {
}
AutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, declarations: [AutocompleteComponent], imports: [CommonModule,
        ReactiveFormsModule,
        RiseInputModule,
        TransliterationModule,
        NzInputModule,
        NzAutocompleteModule], exports: [AutocompleteComponent] });
AutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            RiseInputModule,
            TransliterationModule,
            NzInputModule,
            NzAutocompleteModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AutocompleteComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        RiseInputModule,
                        TransliterationModule,
                        NzInputModule,
                        NzAutocompleteModule
                    ],
                    exports: [
                        AutocompleteComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dG9jb21wbGV0ZS9zcmMvbGliL2F1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFtQnBELE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFkM0IscUJBQXFCLGFBR3JCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2Isb0JBQW9CLGFBR3BCLHFCQUFxQjtnSEFHWixrQkFBa0IsWUFacEI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsYUFBYTtZQUNiLG9CQUFvQjtTQUNyQjsyRkFLVSxrQkFBa0I7a0JBaEI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2Isb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSaXNlSW5wdXRNb2R1bGUgfSBmcm9tICdkaXN0L3Jpc2UtaW5wdXQnO1xuaW1wb3J0IHsgVHJhbnNsaXRlcmF0aW9uTW9kdWxlIH0gZnJvbSAnZGlzdC90cmFuc2xpdGVyYXRpb24nO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUmlzZUlucHV0TW9kdWxlLFxuICAgIFRyYW5zbGl0ZXJhdGlvbk1vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICAgIE56QXV0b2NvbXBsZXRlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVNb2R1bGUgeyB9XG4iXX0=