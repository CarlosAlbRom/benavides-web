import { ComponentsModule } from './../../components/components.module';
import { CommonContentModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CommonContentModule,
    ComponentsModule
  ]
})
export class ProductsModule { }
