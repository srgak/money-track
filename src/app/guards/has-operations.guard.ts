import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class HasOperationsGuard implements CanActivate {
  constructor(private data: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (this.data.walletList.length) {
    //   return true;
    // } else {
    //   this.router.navigate(['./wallets']);
    //   return false;
    // }
    // next.params.subscribe(console.log);
    // next.queryParams.subscribe(console.log);
    console.log(next.data);
    console.log(next.params);
    console.log(next.queryParams);

    return true;

  }
  
}
