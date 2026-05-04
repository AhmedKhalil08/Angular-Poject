import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Darkmode } from '../../Directives/darkmode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NgClass, Darkmode,RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isDark :boolean=false;
  

}
