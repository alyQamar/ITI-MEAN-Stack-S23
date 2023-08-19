import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myData } from '../products/products.component';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Products:DataserviceService = new DataserviceService();
  // myRout:ActivatedRoute = new ActivatedRoute();
  // he = this.myRout.snapshot.paramMap.get("id");
  // element = this.Products.getProductsById(this.he);
  id:any;
  element:any;
  // elemennt
  constructor(public myRouts:ActivatedRoute){
    this.id = this.myRouts.snapshot.paramMap.get('id');
    this.element = this.Products.getProductsById(this.id)
  }
  
}
