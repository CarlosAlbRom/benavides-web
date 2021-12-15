import { ComponentsModule } from './../../components/components.module';
import { CommonContentModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CommonContentModule,
    ComponentsModule
  ]
})
export class DetailModule { }
