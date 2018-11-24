import { Token, ConnectedOrganisation } from './../../model/tokenDetails';
import { AuthenticationService, IAuthenticationService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  user: Token;
  currentOrganisation: ConnectedOrganisation;
  constructor(protected $http: HttpClient, protected service: IAuthenticationService) {

    this.user = this.service.getUserData();

    this.user.connectedOrganisations.forEach(x => {
        if (x.id === this.user.organisationId) {
        this.currentOrganisation = x;
        }
    });
  }

  ngOnInit() {
  }

}
