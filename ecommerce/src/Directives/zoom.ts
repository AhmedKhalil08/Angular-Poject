import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class Zoom {
  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.transition = 'transform 0.3s';
  }

  @HostListener('mouseover') mousemove(){
    this.elementRef.nativeElement.style.transform='scale(1.2)';
  }
  @HostListener('mouseleave') mouseleave(){
    this.elementRef.nativeElement.style.transform='scale(1)';
  }
}
