import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {ProductNewComponent} from './components/products/product-new/product-new.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'newProduct', component: ProductNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
