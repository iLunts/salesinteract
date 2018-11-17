import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-offers-list',
  templateUrl: './open-offers-list.component.html',
  styleUrls: ['./open-offers-list.component.less']
})
export class OpenOffersListComponent implements OnInit {
  isOpenSidebar: boolean = false;
  
  @Input() openOffersData: any;
  @Input() openOffersLimit: any;
  constructor() { }

  ngOnInit() {
  }

  openSidebar(){
    this.isOpenSidebar = !this.isOpenSidebar;
  }
}
