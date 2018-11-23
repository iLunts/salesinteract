import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
@Pipe({
  name: 'filterByMoment'
})
export class FilterByMomentPipe implements PipeTransform {
  transform(value: any, args: any, args1: any, args2?: any): any {
    const arr = [];

    console.log('args');
    console.log(args);

    value.forEach(element => {

      console.log(moment(element[args]).diff(args1, args2 || 'day'));

      if (moment(element[args]).diff(args1, args2 || 'day') === 0) {
        arr.push(element);
      }
    });

    return arr;
  }
}
