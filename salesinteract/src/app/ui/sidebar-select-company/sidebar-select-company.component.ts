import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService, IAuthenticationService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Token } from 'src/app/model/tokenDetails';

@Component({
  selector: 'app-sidebar-select-company',
  templateUrl: './sidebar-select-company.component.html',
  styleUrls: ['./sidebar-select-company.component.less']
})
export class SidebarSelectCompanyComponent implements OnInit {
  user: Token;

  @Input() Hidden = false;
  @Output() HiddenChange = new EventEmitter<boolean>();
  @Input() CompanyList: any;

  constructor(protected $http: HttpClient, 
              protected service: IAuthenticationService) {
    this.user = this.service.getUserData();
   }

  ngOnInit() {
  }

  close() {
    this.Hidden = false;
    this.HiddenChange.emit(false);
  }
}
