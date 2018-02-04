import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TargetGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (next.routeConfig.path.toLowerCase() === sessionStorage.getItem('faction').toLowerCase()) {
        this.router.navigate(['wrongTeam']);
        return false;
      }
      return true;
  }
}
