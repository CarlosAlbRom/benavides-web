import { CommonContentModule } from './../common/common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonContentModule,
    AlertModule.forRoot({
      maxMessages: 5, 
      timeout: 5000,
      positionX: 'right',
      positionY: 'bottom'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
