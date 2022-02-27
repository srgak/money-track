import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {

  transform(value: number): string {
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      .replace('.', ',');
  }

}
