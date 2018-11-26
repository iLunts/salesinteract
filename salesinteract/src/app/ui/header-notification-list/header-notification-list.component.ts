import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-notification-list',
  templateUrl: './header-notification-list.component.html',
  styleUrls: ['./header-notification-list.component.less']
})
export class HeaderNotificationListComponent implements OnInit {
  
  @Input() NotificationList: any;

  constructor() { }

  ngOnInit() {
  }

}
