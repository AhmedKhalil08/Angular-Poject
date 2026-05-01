import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Darkmode } from '../../Directives/darkmode';

@Component({
  selector: 'app-nav',
  imports: [NgClass, Darkmode],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isDark :boolean=false;
  

}
