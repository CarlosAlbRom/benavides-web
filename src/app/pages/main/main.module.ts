import { CommonContentModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CommonContentModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
