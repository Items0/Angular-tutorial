import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})

export class MyfilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter || filter.toString().length < 3) {
      return items;
    }
    console.log("Pipe filter mode");
    return items.filter(element => element.title.includes(filter));
  }

}
