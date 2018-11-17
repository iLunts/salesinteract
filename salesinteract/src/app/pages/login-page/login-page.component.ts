import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  isResetPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resetPassword(){
    this.isResetPassword = !this.isResetPassword;
  }

}
