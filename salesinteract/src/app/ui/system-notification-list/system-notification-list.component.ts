import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-notification-list',
  templateUrl: './system-notification-list.component.html',
  styleUrls: ['./system-notification-list.component.less']
})
export class SystemNotificationListComponent implements OnInit {
  notificationList: any = [
    {
      image: '',
      name: 'John Amazon',
      desc: 'Piet Test heeft het bestand Bedrijfspresentatie geopened',
      new: true,
      date: '2 days ago',
    },
    {
      image: '',
      name: 'John Amazon',
      desc: 'Piet Test heeft het bestand Bedrijfspresentatie geopened',
      new: false,
      date: '4 days ago',
    },
    {
      image: '',
      name: 'John Amazon',
      desc: 'Piet Test heeft het bestand Bedrijfspresentatie geopened',
      new: false,
      date: '1 month ago',
    },
    {
      image: '',
      name: 'John Amazon',
      desc: 'Piet Test heeft het bestand Bedrijfspresentatie geopened',
      new: false,
      date: '1 year ago',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
