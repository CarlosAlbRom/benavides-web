import { ComponentsModule } from 'src/app/components/components.module';
import { CommonContentModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CommonContentModule,
    ComponentsModule
  ]
})
export class AboutModule { }
