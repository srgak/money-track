import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if(!!localStorage.getItem('userData')) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
