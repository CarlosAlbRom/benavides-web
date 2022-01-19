import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminColorComponent } from './admin-color/admin-color.component';
import { AdminTagComponent } from './admin-tag/admin-tag.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminHomeComponent,
    AdminArticleComponent,
    AdminColorComponent,
    AdminTagComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
