import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { CommonContentModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';



@NgModule({
  declarations: [
    LinksComponent
  ],
  imports: [
    CommonModule,
    CommonContentModule,
    RouterModule,
    ComponentsModule
  ]
})
export class LinksModule { }
