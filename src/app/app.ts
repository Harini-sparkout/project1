import { Component, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { CapitalizePipe } from './capitalize-pipe';
import { Display } from './display/display';
import { Color } from './color';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Child } from './child/child';
import { PromiseComponent } from './promise/promise';

@Component({
  selector: 'app-root',
  imports: [User,CapitalizePipe,Display,Color,NgClass,NgStyle,Child,PromiseComponent,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
    classes = ['class1', 'class2'];
      isRed = true;
      students=[
{name:'hariharan'},
{name:'balamurugan'},
{name:'dharshini'},
{name:'mehasree'}
]
}
