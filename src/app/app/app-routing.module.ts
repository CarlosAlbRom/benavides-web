import { LinksComponent } from './../pages/links/links.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: '',
    loadChildren: () => import('../pages/main/main.module').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
