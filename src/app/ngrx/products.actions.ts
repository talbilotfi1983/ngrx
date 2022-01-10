import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export enum ProductsActionsTypes {
  /* Get All products*/
  GET_ALL_PRODUCTS = '[Products] Get all products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get all products Success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get all products Error',

  /* Get Selected products*/
  GET_SELECTED_PRODUCTS = '[Products] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get Selected products Success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get Selected products Error',

  /* Get Selected products*/
  GET_AVAILABLE_PRODUCTS = '[Products] Get Available products',
  GET_AVAILABLE_PRODUCTS_SUCCESS = '[Products] Get Available products Success',
  GET_AVAILABLE_PRODUCTS_ERROR = '[Products] Get Available products Error',

  /* Get Search products*/
  SEARCH_PRODUCTS = '[Products] Search products',
  SEARCH_PRODUCTS_SUCCESS = '[Products] Search products Success',
  SEARCH_PRODUCTS_ERROR = '[Products] Search products Error',

  /* Select product*/
  SELECT_PRODUCT = '[Product] Select product',
  SELECT_PRODUCT_SUCCESS = '[Product] Select product Success',
  SELECT_PRODUCT_ERROR = '[Product] Select product Error',

  /* Delate product*/
  DELETE_PRODUCT = '[Product] Delete product',
  DELETE_PRODUCT_SUCCESS = '[Product] Delete product Success',
  DELETE_PRODUCT_ERROR = '[Product] Delete product Error',

  /* New product*/
  NEW_PRODUCT = '[Product] New product',
  NEW_PRODUCT_SUCCESS = '[Product] New product Success',
  NEW_PRODUCT_ERROR = '[Product] New product Error',
  /* Save product*/
  SAVE_PRODUCT = '[Product] Save product',
  SAVE_PRODUCT_SUCCESS = '[Product] Save product Success',
  SAVE_PRODUCT_ERROR = '[Product] Save product Error',
}

export class GetAllProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

export class GetSelectedProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

export class GetAvailableProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class GetAvailableProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetAvailableProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

export class SearchProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class SearchProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class SearchProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }
}

export class SelectProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SelectProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class DeleteProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT;

  constructor(public payload: number) {
  }
}

export class DeleteProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: number) {
  }
}

export class DeleteProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class SaveProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

export class SaveProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}

export class NewProductAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT;

  constructor(public payload: any) {
  }
}

export class NewProductActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_SUCCESS;

  constructor(public payload: any) {
  }
}

export class NewProductActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_ERROR;

  constructor(public payload: string) {
  }
}
export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  | GetAvailableProductsAction | GetAvailableProductsActionSuccess | GetAvailableProductsActionError
  | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
  | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
  | DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
  | NewProductAction | NewProductActionSuccess | NewProductActionError
  | SaveProductAction | SaveProductActionSuccess | SaveProductActionError
  ;
