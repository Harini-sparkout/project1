

import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Count',
  standalone:true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './count.html',
  styleUrl: './count.css',
})

        
export class Count{
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