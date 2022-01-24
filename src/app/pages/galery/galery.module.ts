import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryRoutingModule } from './galery-routing.module';
import { GaleryComponent } from './galery.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule,
    ComponentsModule
  ]
})
export class GaleryModule { }
