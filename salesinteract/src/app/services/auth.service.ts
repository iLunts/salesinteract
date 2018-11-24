import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Token } from '../model/tokenDetails';

@Injectable()
export abstract class IAuthenticationService {
  abstract isAuthentificated();
  abstract getUserData(): Token;
  abstract getToken();
  abstract setToken(token: string);
}

@Injectable()
export class AuthenticationService extends IAuthenticationService {

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    super();
  }

  isAuthentificated(): boolean {
    return (
      localStorage.getItem('access_token') &&
      !this.jwtHelperService.isTokenExpired()
    );
  }

  getUserData(): Token {
    return this.jwtHelperService.decodeToken(localStorage.getItem('access_token'));
  }
  getToken() {
    return this.jwtHelperService.tokenGetter();
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
