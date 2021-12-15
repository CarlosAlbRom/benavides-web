import { SiteViewerComponent } from './../../components/site-viewer/site-viewer.component';
import { CommonContentModule } from './../../common/common.module';
import { ArticleComponent } from './../../components/article/article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgImageSliderModule,
    CommonContentModule
  ],
  entryComponents: [
    ArticleComponent,
    SiteViewerComponent
  ]
})
export class HomeModule { }
