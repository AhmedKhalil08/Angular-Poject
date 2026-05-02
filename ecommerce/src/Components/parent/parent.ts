import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements AfterViewInit{
  @ViewChild(Child) childRef !:Child;

  ngAfterViewInit(): void {
      this.childRef.sayHello();
  }

  
}
