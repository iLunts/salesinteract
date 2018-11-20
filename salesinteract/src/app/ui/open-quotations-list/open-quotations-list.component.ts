import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-quotations-list',
  templateUrl: './open-quotations-list.component.html',
  styleUrls: ['./open-quotations-list.component.less']
})
export class OpenQuotationsListComponent implements OnInit {
  isOpenSidebar: boolean = false;
  
  @Input() openQuotationsData: any;
  constructor() { }

  ngOnInit() {
  }

  openSidebar(){
    this.isOpenSidebar = !this.isOpenSidebar;
  }
}
