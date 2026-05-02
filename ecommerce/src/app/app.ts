import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../Components/home/home';
import { Products } from '../Components/products/products';
import { Nav } from '../Components/nav/nav';
import { Footer } from '../Components/footer/footer';
import { Master } from '../Components/master/master';
import { Parent } from '../Components/parent/parent';
import { Child } from '../Components/child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Home,Footer,Master,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
}
