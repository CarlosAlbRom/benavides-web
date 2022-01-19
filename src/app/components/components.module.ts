import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ColorTestComponent } from './color-test/color-test.component';
import { SiteViewerComponent } from './site-viewer/site-viewer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ColorTestComponent,
    SiteViewerComponent,
    BreadcrumbsComponent,
    PageLoadingComponent,
    MiniLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleComponent,
    ColorTestComponent,
    SiteViewerComponent,
    BreadcrumbsComponent,
    PageLoadingComponent,
    MiniLoadingComponent
  ]
})
export class ComponentsModule { }
