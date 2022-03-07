import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { RiseInputModule } from 'dist/rise-input';
import * as i0 from "@angular/core";
registerLocaleData(ru);
export class DatePickerModule {
}
DatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, declarations: [DatePickerComponent], imports: [ReactiveFormsModule,
        NzDatePickerModule,
        RiseInputModule], exports: [DatePickerComponent] });
DatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, providers: [{ provide: NZ_I18N, useValue: ru_RU }], imports: [[
            ReactiveFormsModule,
            NzDatePickerModule,
            RiseInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DatePickerComponent
                    ],
                    imports: [
                        ReactiveFormsModule,
                        NzDatePickerModule,
                        RiseInputModule
                    ],
                    providers: [{ provide: NZ_I18N, useValue: ru_RU }],
                    exports: [
                        DatePickerComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGF0ZS1waWNrZXIvc3JjL2xpYi9kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFbEQsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUE7QUFnQnRCLE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFaekIsbUJBQW1CLGFBR25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZUFBZSxhQUlmLG1CQUFtQjs4R0FHVixnQkFBZ0IsYUFMaEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBTHpDO1lBQ1AsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixlQUFlO1NBQ2hCOzJGQU1VLGdCQUFnQjtrQkFkNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBOWl9JMThOLCBydV9SVSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgcnUgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvcnUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJpc2VJbnB1dE1vZHVsZSB9IGZyb20gJ2Rpc3QvcmlzZS1pbnB1dCc7XG5cbnJlZ2lzdGVyTG9jYWxlRGF0YShydSlcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOekRhdGVQaWNrZXJNb2R1bGUsXG4gICAgUmlzZUlucHV0TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTlpfSTE4TiwgdXNlVmFsdWU6IHJ1X1JVIH1dLFxuICBleHBvcnRzOiBbXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=