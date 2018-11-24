import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAuthenticationService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
  isCollapsed: boolean = false;
  isShowRoute: boolean = false;
  user: User;

  constructor(protected service: IAuthenticationService, protected http: HttpClient, private translate: TranslateService) {

    const token = this.service.getUserData();

    this.http.get<User>(`/api/v1/user/${token.userId}`).subscribe(x => {
      this.user = x;
      this.translate.use(this.user.language || 'en');
    });


  }

  ngOnInit() {
  }

  switchRoute() {
    this.isShowRoute = !this.isShowRoute;
  }
}


export interface User {
  id: string;
  firstname: string;
  lastname: string;
  gender: string;
  phone: string;
  address?: any;
  language: string;
  timezone: string;
  job_title?: any;
  remark?: any;
  linkedin?: any;
  facebook?: any;
  twitter?: any;
  photo: string;
  fullname: string;
}
