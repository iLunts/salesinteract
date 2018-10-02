import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class EventSesrvice {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [
            {
                title: '+2 Call',
                start: yearMonth + '-01',
                className: "event--call",
            },
            {
                title: '+1 Visit',
                start: yearMonth + '-04',
                className: "event--visit",
            },
            {
                title: '+3 Follow',
                start: yearMonth + '-07',
                className: "event--too-late",
            },
            {
                title: '+13 Tasks',
                start: yearMonth + '-17',
                className: "event--task",
            },
        ];
        return of(data);
    }
};
