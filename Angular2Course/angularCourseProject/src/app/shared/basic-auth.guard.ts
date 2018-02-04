import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operator/retry';

@Injectable()
export class BasicGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!sessionStorage.getItem('uid')) {
      this.router.navigate(['/admin/login'])
      return false;
    }
    return true;
  }

}