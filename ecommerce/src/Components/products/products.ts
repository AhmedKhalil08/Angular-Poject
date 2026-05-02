import { Component } from '@angular/core';
import productsData from '../../data/prd.json';
import { IProduct } from '../../models/iproduct';
import { DescripPipe } from '../../Pipes/descrip-pipe';
import { Zoom } from '../../Directives/zoom';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  imports: [DescripPipe,Zoom,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
    showToast=false;
    totalPrice:number;
    categories:string[];  
    prdList : IProduct[];
    filteretedList:IProduct[];
    selectedCategory: string = 'all';
constructor(){
this.prdList=productsData;
this.totalPrice=0;
this.categories = [...new Set(productsData.map(p => p.category))];
this.filteretedList=productsData;    
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
} 
filterByCategory(){
    if(this.selectedCategory==="all"){
        this.filteretedList=this.prdList;
    }
    else{
        this.filteretedList=this.prdList.filter(p=>p.category===this.selectedCategory);
    }
}


}

