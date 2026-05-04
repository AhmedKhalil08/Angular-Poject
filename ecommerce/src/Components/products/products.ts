import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { DescripPipe } from '../../Pipes/descrip-pipe';
import { Zoom } from '../../Directives/zoom';
import { FormsModule } from '@angular/forms';
import { DynamicButton } from '../dynamic-button/dynamic-button';
import { StaticData } from '../../Services/static-data';
import { Router, RouterLink } from '@angular/router';
@Component({
    selector: 'app-products',
    imports: [DescripPipe,Zoom,FormsModule,DynamicButton,RouterLink],
    templateUrl: './products.html',
    styleUrl: './products.css',
})

export class Products implements OnChanges{
    @Input() categories:string[]=[]
    @Input() selectedCategory: string = "all";
    @Output() total = new EventEmitter<number>();
    showToast=false;
    prdList : IProduct[];
    filteretedList:IProduct[];
    selectedProduct:IProduct|null=null;
 // constructor
constructor(private staticDataService:StaticData,private router:Router){
this.prdList=staticDataService.getAll();
this.filteretedList=this.prdList;   
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
goToDetails(id:number){
    this.router.navigate(['/products',id])
}
deleteProduct(id:number):void{
    this.staticDataService.delete(id);
    this.filterByCategory();
}

openEdit(product: IProduct) {
    this.selectedProduct = { ...product };  // copy so we don't edit the original directly
}
saveEdit() {
    if (this.selectedProduct) {
        this.staticDataService.update(this.selectedProduct.id, this.selectedProduct);
        this.filterByCategory();
        this.selectedProduct = null;
    }
}
}

