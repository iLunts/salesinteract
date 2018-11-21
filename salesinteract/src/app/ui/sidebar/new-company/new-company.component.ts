import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-sidebar-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.less']
})
export class NewCompanyComponent implements OnInit {
  tabHeading = 'Company';
  companyName = '';

  @Input() Hidden = false;
  @Output() HiddenChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onSelect(data: TabDirective): void {
    this.tabHeading = data.heading;
  }


  close() {
    console.log('close');
    this.Hidden = false;
    this.HiddenChange.emit(false);
  }

}
