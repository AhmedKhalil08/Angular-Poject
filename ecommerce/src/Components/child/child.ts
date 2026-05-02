import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements AfterContentInit {
  count =0;

  @ContentChild('projectedText') projectedtext !:ElementRef;
  
  ngAfterContentInit(): void {
    if (this.projectedtext) {
        console.log(this.projectedtext.nativeElement.textContent);
        this.projectedtext.nativeElement.style.color = 'red';
    }
}
sayHello() {
    console.log('Hello from child!');
}
  increament(){
    this.count++
  }
}
