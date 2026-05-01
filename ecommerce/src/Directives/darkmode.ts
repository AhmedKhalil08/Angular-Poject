import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkmode]',
})
export class Darkmode {
  isDark:boolean = false;
  constructor(private elementRef:ElementRef) {

  }
  @HostListener('click') toggleDarkmode(){
  this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode');
  }
}
