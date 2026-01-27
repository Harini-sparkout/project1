import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [AsyncPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  counter$: Observable<number>;
  constructor(){
    this.counter$ = new Observable<number>((observer)=>{
      let count=0;
      
      const intervalId= setInterval(()=>{
        observer.next(count++);

      },1000);
      setTimeout(()=>{
        observer.complete();

      },5000);

    }
    )
}
  }
        
