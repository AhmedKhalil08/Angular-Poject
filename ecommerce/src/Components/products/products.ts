import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import productsData from '../../data/prd.json';
import { IProduct } from '../../models/iproduct';
import { DescripPipe } from '../../Pipes/descrip-pipe';
import { Zoom } from '../../Directives/zoom';
import { FormsModule } from '@angular/forms';
import { DynamicButton } from '../dynamic-button/dynamic-button';
@Component({
  selector: 'app-products',
  imports: [DescripPipe,Zoom,FormsModule,DynamicButton],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges{
    @Input() selectedCategory: string = "all";
    @Output() total = new EventEmitter<number>();
    showToast=false;
    // totalPrice:number;
    // categories:string[];  
    prdList : IProduct[];
    filteretedList:IProduct[];
    // selectedCategory: string = 'all';
constructor(){
this.prdList=productsData;
// this.totalPrice=0;
// this.categories = [...new Set(productsData.map(p => p.category))];
this.filteretedList=productsData;    
}

    ngOnChanges(changes: SimpleChanges): void {
        this.filterByCategory();
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
    // this.totalPrice += Quan * product.price;
    product.stock -= Quan;
    this.total.emit(Quan * product.price);
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

