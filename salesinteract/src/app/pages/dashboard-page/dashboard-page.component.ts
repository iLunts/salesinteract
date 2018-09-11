import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { data } from 'jquery';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {
  taskHistoryList: any = [
    { name: 'Coen van der Kolk', date: '31 aug. 2018 08:50', image: 'http://dreamicus.com/data/face/face-06.jpg'},
    { name: 'Grant Solomonesck', date: '20 aug. 2018 08:50', image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'},
    { name: 'Grantowner Moriskovich', date: '31 aug. 2018 08:50', image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'},
  ];

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor() { }

  ngOnInit() {

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'title',
        center: 'today prev,next',
        right: ''
      },
      // events: data
    };
    
  }

}
