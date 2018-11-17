import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuthenticationService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  isResetPassword: boolean = false;

  email: string;
  password: string;

  constructor(protected service: IAuthenticationService, protected $http: HttpClient, protected $router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    this.isResetPassword = !this.isResetPassword;
  }

  login() {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

    this.$http.post('/api/v1/login', `email=${this.email}&password=${this.password}`, options
    ).subscribe( (x: any) => {
      this.service.setToken(x.token);
      this.$router.navigate([ '', 'dashboard' ]);
    });

  }
}
