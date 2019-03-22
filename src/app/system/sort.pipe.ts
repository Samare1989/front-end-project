import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], column: string, order: string = 'asc'): any []{
    if( typeof objArr == "undefined") return;
    return objArr.sort(compareFn);;
    function compareFn(left:AnalyserNode,right: any){
      // study note. make case insensetive that way its easier for the users to find the list when they search.
      let l: string = left[column].toLowerCase();
      let r: string = left[column]. toLowerCase();
      // if equal, return 0
      if(order === 'asc')
      return l > r ? 1: -1;
      else
      return l < r ? 1 : -1;
    }
  }

}


