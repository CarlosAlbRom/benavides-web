import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

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
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.adminModule)
      // },
      {
        path: 'galery',
        loadChildren: () => import('../galery/galery.module').then(m => m.GaleryModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
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
