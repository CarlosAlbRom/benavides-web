import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.adminModule)
      // },
      {
        path: 'galery',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        redirectTo: 'home',
        path: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
