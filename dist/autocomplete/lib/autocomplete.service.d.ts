import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AutocompleteService {
    private http;
    constructor(http: HttpClient);
    isLoading: boolean;
    isError: boolean;
    getSortedNames(url: string, param: string): Observable<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AutocompleteService>;
}
