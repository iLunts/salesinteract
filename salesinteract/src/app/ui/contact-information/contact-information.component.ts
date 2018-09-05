import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.less']
})
export class ContactInformationComponent implements OnInit {
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.isEdit = !this.isEdit;
  }
}
