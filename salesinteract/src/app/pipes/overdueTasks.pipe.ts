import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
@Pipe({
  name: 'overdueTasks'
})
export class OverdueTasksPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const arr = [];

    value.forEach(element => {

      if (moment(element.due) < moment() && (!element.completed && element.status === 'new')) {
          arr.push(element);
      }
    });

    return arr;
  }

}
