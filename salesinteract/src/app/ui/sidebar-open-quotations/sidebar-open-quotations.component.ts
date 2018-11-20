import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-open-quotations',
  templateUrl: './sidebar-open-quotations.component.html',
  styleUrls: ['./sidebar-open-quotations.component.less']
})
export class SidebarOpenQuotationsComponent implements OnInit {

  @Input() openQuotationsData;
  constructor() { }

  ngOnInit() {
  }

}
