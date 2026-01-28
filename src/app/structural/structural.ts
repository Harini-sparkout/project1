import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  imports: [],
  templateUrl: './structural.html',
  styleUrl: './structural.css',
})
export class Structural {
      color='green';
      roles=["developer","UI UX","devops","testing"];
      score: number= 67;
      login= true;
      age:number=25;
}
