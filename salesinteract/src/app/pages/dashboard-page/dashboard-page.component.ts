import { Dashboard } from './../../model/dashboard';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
// import { data } from 'jquery';
import { contacten } from '../../model/many-models';
import { afgeronde } from '../../model/many-models';
import { EventSesrvice } from '../../services/event.service';
import { map, groupBy, toArray, tap, mergeMap, reduce } from 'rxjs/operators';

import * as moment from 'moment';
import { from, GroupedObservable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {
  taskTodayFilter = 'all';
  taskOverdueFilter = 'all';

  isCollapsedTopBar = false;
  isOpenSidebarNewCompany = false;
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

  contactenList: any = [
    {
      'name': 'Lead',
      'value': 16
    },
    {
      'name': 'Prospect',
      'value': 6
    },
    {
      'name': 'Customer',
      'value': 0
    },
    {
      'name': 'Open task',
      'value': 4
    },
    {
      'name': 'Overdue',
      'value': 19
    },
  ];

  completeTaskList: any = [
    {
      'name': 'Send information',
      'value': 16
    },
    {
      'name': 'Send quotation',
      'value': 10
    },
    {
      'name': 'Visit appointment',
      'value': 24
    },
    {
      'name': 'Contact was not reachable',
      'value': 4
    },
    {
      'name': 'Contact had no time',
      'value': 15
    },
    {
      'name': 'I had no time',
      'value': 3
    }
  ];

  // completeTaskList: any = [
  //   {
  //     "name": "Mon",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 5
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 12
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 10
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 15
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Tue",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 10
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 16
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 6
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 28
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Wed",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 6
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 12
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 9
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 24
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Thu",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 7
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 13
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 16
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 10
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Fri",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 12
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 9
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 14
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 10
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Sat",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 5
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 15
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 9
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 20
  //       },
  //     ]
  //   },
  //   {
  //     "name": "Sun",
  //     "series": [
  //       {
  //         "name": "Belafspraak",
  //         "value": 14
  //       },
  //       {
  //         "name": "Offerte ver",
  //         "value": 15
  //       },
  //       {
  //         "name": "Bezoekafspraak",
  //         "value": 8
  //       },
  //       {
  //         "name": "Some text",
  //         "value": 30
  //       },
  //     ]
  //   },
  // ];

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

  isOpenSidebar = false;


  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  dashboardData: Dashboard = {};
  date: any;

  constructor(protected _eventService: EventSesrvice, protected $http: HttpClient) {
    Object.assign(this, { contacten, afgeronde });
    this.date = moment();
  }

  ngOnInit() {

    this.$http.get<Dashboard>('/api/v1/dashboard/sales').subscribe(x => {
      this.dashboardData = x;
    });

    const self = this;
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'title',
        center: 'today prev,next',
        right: ''
      },
      events: function(start, end, timezone, callback) {
        self.loadData(start, end, timezone, callback);
      }
    };
  }

  loadData(start: moment.Moment, end: moment.Moment, timezone: any, callback) {
      this.$http.get(`/api/v1/task?from=${start.format('YYYY-MM-DD')}&to=${end.format('YYYY-MM-DD')}&limit=1000`)
      .subscribe( (y: any) => {
        this.dashboardData.tasks = [];

        y.forEach(element => {
          this.dashboardData.tasks.push(element);
        });

        console.log('write tasks');
        console.log(y);
        const events = [];
        from(y)
        .pipe(
          map((z: any) => {
            return  {
            title: '+2 Call',
            start: moment(z.due).format('YYYY-MM-DD'),
            className: 'event--' + z.previousOutcome
           };
          }),
         groupBy(z => z.start),
         mergeMap((group$) =>
         group$.pipe(
           reduce((acc: any, cur) => [...acc, cur], [' ' + group$.key]))
           ),
         map((arr: any[]) => ({'start': arr[0], 'title': '+ ' + arr.slice(1).length
         + (arr.slice(1).length > 1 ? 'task' : ' tasks')}))
          ).subscribe(x => {
            events.push(x);
         });
         callback(events);
        });
  }

  openSidebar() {
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

  loadTasks($event: any) {
    this.date = $event.detail.date;
  }
}
