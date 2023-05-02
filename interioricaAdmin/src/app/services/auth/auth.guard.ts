import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn:any = false;
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      }
      this.router.navigate(['login'], { state: { message: 'Please login first!', status: 'error' } });
     // this.router.navigate(['/login']);
      return false;
    }
}
