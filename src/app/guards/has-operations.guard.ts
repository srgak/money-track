import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class HasOperationsGuard implements CanActivate {
  constructor(private data: DataService, private router: Router) {}

  canActivate(): boolean {
    if (this.data.walletList.length) {
      return true;
    } else {
      this.router.navigate(['./wallets']);
      return false;
    }
  }
  
}
