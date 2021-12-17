import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('../pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule)
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('../pages/admin/admin.module').then(m => m.adminModule)
  // },
  {
    path: 'galery',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
