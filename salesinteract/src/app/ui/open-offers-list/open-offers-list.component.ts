import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-offers-list',
  templateUrl: './open-offers-list.component.html',
  styleUrls: ['./open-offers-list.component.less']
})
export class OpenOffersListComponent implements OnInit {
  limitListMax: number = 2;
  limitListMin: number = 2;
  isShowMore: boolean = true;
  
  @Input() openOffersData: any;
  @Input() openOffersLimit: any;
  constructor() { }

  ngOnInit() {
  }

  showMore(){
    this.isShowMore = false;
  }
  
  showLess(){
    this.isShowMore = true;
  }

}
