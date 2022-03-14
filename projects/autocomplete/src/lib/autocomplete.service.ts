import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { map, Observable, of, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  public isLoading: boolean;
  public isError: boolean;

  public getSortedNames(url: string, param: string): Observable<string[]> {
    
    if(param.length) {
      this.isLoading = true;
      return this.http.get(url)
        .pipe(
          catchError(err => throwError(() => err)),
          map((res: string[]) => res.map(item => item.toLowerCase())),
          map((data: string[]) => data.filter(item => item.startsWith(param))),
          map((filtered: string[]) => filtered.map(item => `${item[0].toUpperCase()}${item.substring(1)}`))
        );
    } else {
      return of([]);
    }
  }
}
