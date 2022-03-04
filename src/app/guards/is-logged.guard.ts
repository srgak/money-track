import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  private isLoad(): boolean {
    if(!!localStorage.getItem('userData')) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

  canActivate(): boolean {
    return this.isLoad();
  }

  canLoad(): boolean {
    return this.isLoad();
  }
  
}
