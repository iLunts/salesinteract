import { Dashboard } from './../../model/dashboard';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
// import { data } from 'jquery';
import { contacten } from '../../model/many-models';
import { afgeronde } from '../../model/many-models';
import { EventSesrvice } from '../../services/event.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {
  isCollapsedTopBar: boolean = false;
  isOpenSidebarNewCompany: boolean = false;
  single: any[];
  contacten: any[];
  afgeronde: any[];
  multi: any[];

  view: any[] = [200, 150];
  viewCompleteTask: any[] = [400, 200];
  viewCircle: any[] = [150, 150];

  // Charts options
  xAxisLabel = '';
  yAxisLabel = '';
  colorScheme = {
    domain: ['#04a9f4', '#29b6f6', '#4fc3f7', '#80d4fa', '#b3e5fc', '#e1f5fe']
  };
  colorSchemeCircle = {
    domain: ['#f44336', '#673ab7', '#2196f3', '#8bc34a', '#ff5722', '#607d8b']
  };
  colorSchemeCompleteTask = {
    domain: ['#FFDA83', '#FF8373', '#56D9FE', '#A3A0FB']
  };

  completeTaskList: any = [
    {
      "name": "Mon",
      "series": [
        {
          "name": "Belafspraak",
          "value": 5
        },
        {
          "name": "Offerte ver",
          "value": 12
        },
        {
          "name": "Bezoekafspraak",
          "value": 10
        },
        {
          "name": "Some text",
          "value": 15
        },
      ]
    },
    {
      "name": "Tue",
      "series": [
        {
          "name": "Belafspraak",
          "value": 10
        },
        {
          "name": "Offerte ver",
          "value": 16
        },
        {
          "name": "Bezoekafspraak",
          "value": 6
        },
        {
          "name": "Some text",
          "value": 28
        },
      ]
    },
    {
      "name": "Wed",
      "series": [
        {
          "name": "Belafspraak",
          "value": 6
        },
        {
          "name": "Offerte ver",
          "value": 12
        },
        {
          "name": "Bezoekafspraak",
          "value": 9
        },
        {
          "name": "Some text",
          "value": 24
        },
      ]
    },
    {
      "name": "Thu",
      "series": [
        {
          "name": "Belafspraak",
          "value": 7
        },
        {
          "name": "Offerte ver",
          "value": 13
        },
        {
          "name": "Bezoekafspraak",
          "value": 16
        },
        {
          "name": "Some text",
          "value": 10
        },
      ]
    },
    {
      "name": "Fri",
      "series": [
        {
          "name": "Belafspraak",
          "value": 12
        },
        {
          "name": "Offerte ver",
          "value": 9
        },
        {
          "name": "Bezoekafspraak",
          "value": 14
        },
        {
          "name": "Some text",
          "value": 10
        },
      ]
    },
    {
      "name": "Sat",
      "series": [
        {
          "name": "Belafspraak",
          "value": 5
        },
        {
          "name": "Offerte ver",
          "value": 15
        },
        {
          "name": "Bezoekafspraak",
          "value": 9
        },
        {
          "name": "Some text",
          "value": 20
        },
      ]
    },
    {
      "name": "Sun",
      "series": [
        {
          "name": "Belafspraak",
          "value": 14
        },
        {
          "name": "Offerte ver",
          "value": 15
        },
        {
          "name": "Bezoekafspraak",
          "value": 8
        },
        {
          "name": "Some text",
          "value": 30
        },
      ]
    },
  ];

  taskHistoryList: any = [
    { name: 'Coen van der Kolk',
      date: '31 aug. 2018 08:50',
      image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
    },
    { name: 'Grant Solomonesck',
      date: '20 aug. 2018 08:50',
      image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
    },
    { name: 'Grantowner Moriskovich',
      date: '31 aug. 2018 08:50',
      image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'
    },
  ];

  taskHistoryLateList: any = [
    { name: 'Coen van der Kolk',
      date: '31 aug. 2018 08:50',
      contactName: 'Abagnale Frank',
      image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
      contactImage: '',
      result: 'Visit appointment',
      task: 'Follow'
    },
    { name: 'Grant Solomonesck',
      date: '20 aug. 2018 08:50',
      image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
      contactName: 'Boileau-Despreaux Nicholas',
      contactImage: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg',
      result: 'Call phone',
      task: 'Complete'
    },
    { name: 'Grantowner Moriskovich',
      date: '31 aug. 2018 08:50',
      image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg',
      contactName: 'Bayly Thomas Haynes',
      contactImage: 'http://dreamicus.com/data/face/face-06.jpg',
      result: '',
      task: 'Task apvoling'
    },
  ];

  // contactGraphList: any = [
  //   {
  //     title: 'Leads', color: '#77dafd', count: '16', percent: '100'
  //   },
  //   {
  //     title: 'Prospects', color: '#fff400', count: '13', percent: '90'
  //   },
  //   {
  //     title: 'Customers', color: '#9ad100', count: '9', percent: '65'
  //   },
  //   {
  //     title: 'Open task', color: '#0096e0', count: '3', percent: '30'
  //   },
  //   {
  //     title: 'Overdue task', color: '#ff000a', count: '1', percent: '10'
  //   },
  // ];

  isOpenSidebar: boolean = false;


  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  dashboardData: Dashboard = {};

  constructor(protected _eventService: EventSesrvice, protected $http: HttpClient) {
    Object.assign(this, { contacten, afgeronde });
  }

  ngOnInit() {

    this.$http.get<Dashboard>('/api/v1/dashboard/sales').subscribe(x => {
      this.dashboardData = x;
    });

    this._eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'title',
          center: 'today prev,next',
          right: ''
        },
        events: data
      };
    });
  }

  openSidebar(){
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  collapsedTopBar() {
    this.isCollapsedTopBar = !this.isCollapsedTopBar;
  }

  openSidebarNewCompany() {
    this.isOpenSidebarNewCompany = !this.isOpenSidebarNewCompany;
  }

  onSelect(event) {
    console.log(event);
  }

}
