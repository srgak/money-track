import { Injectable } from '@angular/core';
import { map, of, catchError, throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AutocompleteService {
    constructor(http) {
        this.http = http;
    }
    getSortedNames(url, param) {
        if (param.length) {
            this.isLoading = true;
            return this.http.get(url)
                .pipe(catchError(err => throwError(() => err)), map((res) => res.map(item => item.toLowerCase())), map((data) => data.filter(item => item.includes(param))), map((filtered) => filtered.map(item => `${item[0].toUpperCase()}${item.substring(1)}`)));
        }
        else {
            return of([]);
        }
    }
}
AutocompleteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
AutocompleteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRvY29tcGxldGUvc3JjL2xpYi9hdXRvY29tcGxldGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtuRSxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBS2xDLGNBQWMsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUU5QyxJQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDdEIsSUFBSSxDQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN4QyxHQUFHLENBQUMsQ0FBQyxHQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUMzRCxHQUFHLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbEUsR0FBRyxDQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2xHLENBQUM7U0FDTDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7O2dIQXJCVSxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQUZsQixNQUFNOzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSwgb2YsIGNhdGNoRXJyb3IsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgaXNFcnJvcjogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0U29ydGVkTmFtZXModXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgXG4gICAgaWYocGFyYW0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IoKCkgPT4gZXJyKSksXG4gICAgICAgICAgbWFwKChyZXM6IHN0cmluZ1tdKSA9PiByZXMubWFwKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpKSksXG4gICAgICAgICAgbWFwKChkYXRhOiBzdHJpbmdbXSkgPT4gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmluY2x1ZGVzKHBhcmFtKSkpLFxuICAgICAgICAgIG1hcCgoZmlsdGVyZWQ6IHN0cmluZ1tdKSA9PiBmaWx0ZXJlZC5tYXAoaXRlbSA9PiBgJHtpdGVtWzBdLnRvVXBwZXJDYXNlKCl9JHtpdGVtLnN1YnN0cmluZygxKX1gKSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==