import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from "../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Not currently used, but could be used to check role
        const expectedRole = route.data.expectedRole;

        const token = AuthService.getToken();

        // decode the token to get its payload
        const tokenPayload = decode(token);

        if (!token || tokenPayload.role !== expectedRole) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
