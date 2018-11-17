import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable()
export abstract class IAuthenticationService {
  abstract isAuthentificated();
  abstract getToken();
  abstract setToken(token: string);
}

@Injectable()
export class AuthenticationService extends IAuthenticationService {
  isAuthentificated(): boolean {
    return (
      localStorage.getItem('access_token') &&
      !this.jwtHelperService.isTokenExpired()
    );
  }
  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    super();
  }

  getToken() {
    return this.jwtHelperService.tokenGetter();
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
