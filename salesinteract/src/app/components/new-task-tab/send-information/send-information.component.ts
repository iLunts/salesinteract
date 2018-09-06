import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-information',
  templateUrl: './send-information.component.html',
  styleUrls: ['./send-information.component.less']
})
export class SendInformationComponent implements OnInit {
  sendInformation: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeSendInformation(item) {
    this.sendInformation = item;
  }

}
