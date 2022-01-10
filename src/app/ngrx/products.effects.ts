import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  DeleteProductActionError,
  DeleteProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetAvailableProductsActionError,
  GetAvailableProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess, NewProductActionSuccess,
  ProductsActions,
  ProductsActionsTypes, SaveProductActionError, SaveProductActionSuccess,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product.model';

@Injectable()
export class ProductsEffects {
  constructor(private productService: ProductService, private effectActions: Actions) {
  }

  getAllProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        return this.productService.getAllProducts()
          .pipe(
            map((products) => new GetAllProductsActionSuccess(products)),
            catchError((err) => of(new GetAllProductsActionError(err.message)))
          );
      })
    )
  );

  /* Get Selected Products*/
  getSelectedProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action) => {
        return this.productService.getSelectedProducts()
          .pipe(
            map((products) => new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err.message)))
          );
      })
    )
  );

  /* Get Available Products*/
  getAvailableProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
      mergeMap((action) => {
        return this.productService.getAvailableProducts()
          .pipe(
            map((products) => new GetAvailableProductsActionSuccess(products)),
            catchError((err) => of(new GetAvailableProductsActionError(err.message)))
          );
      })
    )
  );
  /* Search Products*/
  searchProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products) => new SearchProductsActionSuccess(products)),
            catchError((err) => of(new SearchProductsActionError(err.message)))
          );
      })
    )
  );
  /* Select Product*/
  selectProductEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.changeSelectedProduct(action.payload)
          .pipe(
            map((product) => new SelectProductActionSuccess(product)),
            catchError((err) => of(new SelectProductActionError(err.message)))
          );
      })
    )
  );

  /* Delete Product*/
  DeleteProductEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.deleteProduct(action.payload)
          .pipe(
            map(() => new DeleteProductActionSuccess(action.payload)),
            catchError((err) => of(new DeleteProductActionError(err.message)))
          );
      })
    )
  );
  /* New Product*/
  NewProductEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.NEW_PRODUCT),
      map((action: ProductsActions) => {
        return new NewProductActionSuccess({});
      })
    )
  );
  /* Save Product*/
  SaveProductEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.SAVE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.saveProduct(action.payload)
          .pipe(
            map((product: Product) => new SaveProductActionSuccess(product)),
            catchError((err) => of(new SaveProductActionError(err.message)))
          );
      })
    )
  );
}
