import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AttackingGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!sessionStorage.getItem('faction')) {
        this.router.navigate(['']);
        return false;
      } else if (next.params.faction.toLowerCase() === sessionStorage.getItem('faction').toLowerCase()) {
        this.router.navigate(['wrong/' + sessionStorage.getItem('faction').toLowerCase()]);
        return false;
      }
      return true;
  }
}
