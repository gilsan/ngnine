import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
   
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route:  ActivatedRouteSnapshot,
        states: RouterStateSnapshot
    ) {

       const result = this.authService.isAuth();
       if (!result) {
        return true;
       } else {
          this.router.navigateByUrl('/mininus');
          return false;
       }
       
    }

}