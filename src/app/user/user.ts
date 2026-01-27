import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
        branch:string | number = 5;
        username="harini";
        isLoggedIn :  boolean= true;
        login: boolean= true;
        department: string='developer';
      students: string[]=['harini','hari','dharun'];
      weather: string='rainy';
      isFalse = false

}
