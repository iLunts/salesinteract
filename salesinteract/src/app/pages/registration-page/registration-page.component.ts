import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent implements OnInit {

  step: number = 1;

  constructor() { }

  ngOnInit() {
  }

  registration(){
    this.step += 1;
  }

}
