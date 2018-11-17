import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-open-offers',
  templateUrl: './sidebar-open-offers.component.html',
  styleUrls: ['./sidebar-open-offers.component.less']
})
export class SidebarOpenOffersComponent implements OnInit {

  @Input() openOffersData;
  constructor() { }

  ngOnInit() {
  }

}
