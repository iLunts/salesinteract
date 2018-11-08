import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-company-tab',
  templateUrl: './new-company-tab.component.html',
  styleUrls: ['./new-company-tab.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NewCompanyTabComponent implements OnInit {
  isShowInternalNote: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeInternalNote(){
    this.isShowInternalNote = !this.isShowInternalNote;
  }

}
