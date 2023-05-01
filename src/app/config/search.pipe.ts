import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchData: any): any {
    if(value.length===0){
      return value
    }

      return value.filter(function (search:any){
      return search.name.toLowerCase().indexOf(searchData.toLowerCase())>-1
    });


  }

}
