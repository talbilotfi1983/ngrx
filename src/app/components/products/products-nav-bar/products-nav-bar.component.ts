import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  GetAllProductsAction,
  GetAvailableProductsAction,
  GetSelectedProductsAction,
  SearchProductsAction
} from '../../../ngrx/products.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  // tslint:disable-next-line:typedef
  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  // tslint:disable-next-line:typedef
  onGetAvailableProducts() {
    this.store.dispatch(new GetAvailableProductsAction({}));
  }

  // tslint:disable-next-line:typedef
  onSearch(value: any) {
    this.store.dispatch(new SearchProductsAction(value.keyword));
  }

  // tslint:disable-next-line:typedef
  onGetNewProducts() {
   this.router.navigateByUrl('newProduct');
  }
}
