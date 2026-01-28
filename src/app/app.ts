import { Component, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { CapitalizePipe } from './capitalize-pipe';
import { Display } from './display/display';
import { Color } from './color';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import {  Count } from './count/count';
import { PromiseComponent } from './promise/promise';
import { Child } from './child/child';
import { Structural } from './structural/structural';
import { Private } from './private/private';


@Component({
  selector: 'app-root',
  imports: [User, CapitalizePipe, Display, Color, NgClass, NgStyle, Count, PromiseComponent, NgFor,Child,Structural,Private],
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
