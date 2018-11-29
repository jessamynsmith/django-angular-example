import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = AuthService.getToken();

        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
