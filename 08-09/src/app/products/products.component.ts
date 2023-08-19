import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
export const myData: DataserviceService = new DataserviceService();
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //  x = fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);
  constructor(@Inject(DOCUMENT) private document: Document) { }

  number: number = 1;
  dec(item: any) {
    item.stock--;
    this.products.forEach(item)
  }
  ngOnInit() {

  }
  products = myData.getAllProducts()

}

