import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { StaticData } from '../../Services/static-data';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  product:IProduct|null=null;
  constructor(private staticDataService:StaticData, private route:ActivatedRoute,private router:Router){
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.product=this.staticDataService.getById(id);
  }

}
