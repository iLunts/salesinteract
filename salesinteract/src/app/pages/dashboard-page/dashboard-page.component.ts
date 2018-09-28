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
  single: any[];
  contacten: any[];
  afgeronde: any[];
  multi: any[];

  view: any[] = [200, 150];
  viewCompleteTask: any[] = [500, 250];
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

  taskHistoryList: any = [
    { name: 'Coen van der Kolk', 
      date: '31 aug. 2018 08:50', 
      image: 'http://dreamicus.com/data/face/face-06.jpg'
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
      image: 'http://dreamicus.com/data/face/face-06.jpg',
      contactName: 'Abagnale Frank',
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

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected _eventService: EventSesrvice) { 
    Object.assign(this, { contacten, afgeronde });
  }

  ngOnInit() {

    // this.calendarOptions = {
    //   editable: true,
    //   eventLimit: false,
    //   header: {
    //     left: 'title',
    //     center: 'today prev,next',
    //     right: ''
    //   },
    //   events: data
    // };
    
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

  onSelect(event) {
    console.log(event);
  }

}
