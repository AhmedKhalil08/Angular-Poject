import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';
import productsData from '../../data/prd.json';


@Component({
  selector: 'app-master',
  imports: [FormsModule,Products],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master {
    selectedCategory :string="all";
    totalPrice: number = 0;
    categories: string[] = [...new Set(productsData.map(p => p.category))];
  constructor(){

  }
   updateTotal(price: number) {
        this.totalPrice += price;
    }
}
