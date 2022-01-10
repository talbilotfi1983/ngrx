import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductsState, ProductsStateEnum} from '../../ngrx/products.reducer';
import {map} from 'rxjs/operators';
import {GetAllProductsAction} from '../../ngrx/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsState$: Observable<ProductsState> | null = null;
  readonly ProductsStateEnum = ProductsStateEnum;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllProductsAction({}));
    this.productsState$ = this.store.pipe(
      map((state) => state.catalogState)
    );
  }
}
