import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const group = this.authService.getGroup();

        if (group !== 'admin') {
            this.router.navigate(['/eqi']);
            return false;
        }
        return true;
    }
}
