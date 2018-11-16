import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IAuthenticationService } from '@app/services/auth.service';
import { Injectable } from '@angular/core';

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
