import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getSortedNames(url: string, param: string): Observable<string[]> {
    if(param.length) {
      return this.http.get(url)
        .pipe(
          map((res: any) => res.map((item: string) => item.toLowerCase())),
          map((data: string[]) => data.filter(item => item.includes(param)))
        );
    } else {
      return of([]);
    }
  }
}
