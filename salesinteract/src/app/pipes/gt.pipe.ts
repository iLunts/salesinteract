import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gt'
})
export class GtPipe implements PipeTransform {

  transform(value: any, args: any): any {
    return value > args;
  }

}
