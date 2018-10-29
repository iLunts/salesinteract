import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
import { EventSesrvice } from '../../services/event.service';


@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.less']
})
export class CalendarPageComponent implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  
  constructor(protected _eventService: EventSesrvice) { }

  ngOnInit() {
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

}
