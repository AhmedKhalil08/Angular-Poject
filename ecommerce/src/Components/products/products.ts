import { Component } from '@angular/core';
import productsData from '../../data/prd.json';
import { IProduct } from '../../models/iproduct';
import { DescripPipe } from '../../Pipes/descrip-pipe';
import { Zoom } from '../../Directives/zoom';
@Component({
  selector: 'app-products',
  imports: [DescripPipe,Zoom],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  showToast=false;
  totalPrice:number;
 prdList : IProduct[];
 constructor(){
  this.prdList=productsData;
  this.totalPrice=0;
 }
buyProduct(Input: any, product: IProduct) {
    let Quan = Number(Input.value);
    if (Quan > product.stock) {
        this.showToast = true;
        setTimeout(() => {
            this.showToast = false;
        }, 2000);
        Input.value = "";
        return;
    }
    this.totalPrice += Quan * product.price;
    product.stock -= Quan;
    Input.value = "";
}  }

