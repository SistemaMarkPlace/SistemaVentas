import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { SearchComponent } from './pages/search/search.component';
import { Eror404Component } from './pages/eror404/eror404.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'products/:param',component:ProductsComponent},
  {path:'product',component:ProductComponent},
  {path: 'search/:param', component: SearchComponent },  
  


  {path:'**',pathMatch:'full',component:Eror404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
