import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'home',component:ProductsComponent},
  {path:'',component:ProductsComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'**',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
