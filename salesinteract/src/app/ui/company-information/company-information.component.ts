import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.less']
})
export class CompanyInformationComponent implements OnInit {
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.isEdit = !this.isEdit;
  }

}
