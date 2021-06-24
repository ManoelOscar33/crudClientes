import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 11) {
      return value.replace(/(\d{2})(\d{4})(\d{1})(\d{4})/, '($1)\$2\$3-\$4');
    }
    return 'error';
  }

}
