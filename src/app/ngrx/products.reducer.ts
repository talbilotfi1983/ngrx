import {Product} from '../model/product.model';
import {DeleteProductAction, ProductsActions, ProductsActionsTypes} from './products.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
}

export interface ProductsState {
  products: Product[];
  errorMessage: string;
  dataState: ProductsStateEnum;
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL
};

export function productsReducer(state = initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};
    /* Get Selected Products*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};

    /* Get Available Products*/
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload};
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};
    /* Search Products*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload};
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};
    /* Select Product*/
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      // changement de l'etat du state
      const product = (action as ProductsActions).payload;
      const productsList = [...state.products];
      const data = productsList.map(p => p.id === product.id ? product : p);
      return {...state, dataState: ProductsStateEnum.LOADED, products: data};
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};

    /* Delete Product*/
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      // changement de l'etat du state
      const payload: number = (action as ProductsActions).payload;
      const productsListDelete = [...state.products];
      console.log(payload);
      const dataDelete = productsListDelete.filter(p => p.id !== payload);
      console.log(dataDelete);
      return {...state, dataState: ProductsStateEnum.LOADED, products: dataDelete};
      return {...state};
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};

    /* New Products*/
    case ProductsActionsTypes.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW};
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};
    /* Save Product*/
    case ProductsActionsTypes.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      // changement de l'etat du state
      const newProduct: Product = (action as ProductsActions).payload;
      const productsListNew = [...state.products, newProduct];
      return {...state, dataState: ProductsStateEnum.LOADED, products: productsListNew};
      return {...state};
    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload};

    default :
      return {...state};
  }
}
