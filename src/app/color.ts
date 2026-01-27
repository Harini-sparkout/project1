import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[color]',
  standalone: true
})
export class Color {
  @Input('color') colorName!: string;
  constructor(private el: ElementRef) {
  this.el.nativeElement.style.color = 'teal';
  }
}
