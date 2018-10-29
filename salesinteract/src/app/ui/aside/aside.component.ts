import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
  isCollapsed: boolean = false;
  isShowRoute: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  switchRoute(){
    this.isShowRoute = !this.isShowRoute;
  }
}
