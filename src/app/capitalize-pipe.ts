import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone:true
})
export class CapitalizePipe implements PipeTransform {

 
  transform(students: {name:string}[]|null|undefined):string[]{
    if(!students||students.length===0)
      return[];
    return students.map(student=> student?.name?.slice(-3)||'')
  }
}
