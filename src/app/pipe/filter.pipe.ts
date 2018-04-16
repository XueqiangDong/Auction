import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, searchKeyWord: string): any {
    if (!filterField || !searchKeyWord) {
      return list;
    }
    return list.filter(item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(searchKeyWord) >= 0;
    });
  }

}
