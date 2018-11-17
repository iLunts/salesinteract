import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IAuthenticationService } from '../services/auth.service';

@Injectable()
export class DashGuard implements CanActivate {

    constructor(private _auth: IAuthenticationService, private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const auth = this._auth.isAuthentificated();

        if (!auth) {
            this.router.navigate(['/sign-in']);
        }

        return auth;
    }
}
