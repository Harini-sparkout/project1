import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './promise.html'

  
})
export class PromiseComponent {

  resultPromise: Promise<string> = new Promise(function (resolve, reject) {
  
    setTimeout(function(){
      resolve('hello');

    },3000);

 

  });

}

