import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eq'
})
export class EqPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == args;
  }

}
