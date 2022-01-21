import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ColorTestComponent } from './color-test/color-test.component';
import { SiteViewerComponent } from './site-viewer/site-viewer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleComponent,
    ColorTestComponent,
    SiteViewerComponent,
    BreadcrumbsComponent,
    PageLoadingComponent,
    MiniLoadingComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ArticleComponent,
    ColorTestComponent,
    SiteViewerComponent,
    BreadcrumbsComponent,
    PageLoadingComponent,
    MiniLoadingComponent,
    CartItemComponent
  ]
})
export class ComponentsModule { }
