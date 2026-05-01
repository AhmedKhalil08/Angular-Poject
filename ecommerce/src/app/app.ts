import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../Components/home/home';
import { Products } from '../Components/products/products';
import { Nav } from '../Components/nav/nav';
import { Footer } from '../Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Home,Products,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');
}
