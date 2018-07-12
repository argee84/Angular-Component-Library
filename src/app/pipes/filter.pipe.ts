import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], mySearch: string): any[] {
    if (!items) return [];
    if (!mySearch) return items;
    mySearch = mySearch.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(mySearch);
    });
  }
}