import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[color]',
  standalone: true
})
export class Color {

  constructor(private el: ElementRef) {}

  @Input('color')
  set colorName(value: string | null) {
    const finalColor = value && value.trim() !== '' ? value : 'red';
    this.el.nativeElement.style.color = finalColor;
  }
}
