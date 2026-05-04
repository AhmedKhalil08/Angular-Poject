import { ImportProvidersSource, Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import productsData from '../data/prd.json';
@Injectable({
  providedIn: 'root',
})
export class StaticData {

  private products:IProduct[]=productsData;
  getAll(){
    return this.products;
  }
  getById(id:number):IProduct|null{
    let prd =  this.products.find(p => p.id === id) || null;
    return prd;
  }
  create(prd:IProduct):void{
    this.products.push(prd);
  }
  update(id:number, updated:IProduct):void{
      const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = updated;
    }
  }
  delete(id:number):void{
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
        this.products.splice(index, 1);
    }
  }
}
