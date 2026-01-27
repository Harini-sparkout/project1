import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,SlicePipe,PercentPipe,],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
    today='';
    amount="1700";
       leader="vaishali";
}
