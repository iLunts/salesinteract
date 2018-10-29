import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-sidebar-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.less']
})
export class NewCompanyComponent implements OnInit {
  tabHeading: string = 'Company';
  
  constructor() { }
  
  ngOnInit() {
  
  }

  onSelect(data: TabDirective): void {
    this.tabHeading = data.heading;
  }
  
}
