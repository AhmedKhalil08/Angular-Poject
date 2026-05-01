import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descrip',
})
export class DescripPipe implements PipeTransform {
  transform(value: any): string {
    let result :string;   
    result = value.split(' ').slice(0,3).join(' ')+'...';

    return result;
  }
}
