import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-information',
  templateUrl: './manager-information.component.html',
  styleUrls: ['./manager-information.component.less']
})
export class ManagerInformationComponent implements OnInit {
  managerList: any = [
    { name: 'Coen van der Kolk', email: 'info@wald-int.com'},
    { name: 'Grant Solomonesck', email: 'info@wald-int.com'},
    { name: 'Grantowner Moriskovich', email: 'info@wald-int.com'},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
