import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  imports: [],
  templateUrl: './dynamic-button.html',
  styleUrl: './dynamic-button.css',
})
export class DynamicButton {
@Input() title:string ='Button';
@Input() color:string = "primary";
@Input() width:string="auto";
@Input() height:string="auto";
@Input() disabled: boolean = false;
@Output() action=new EventEmitter<void>();

}
