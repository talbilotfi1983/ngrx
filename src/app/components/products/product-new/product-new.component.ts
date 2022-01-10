import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsState, ProductsStateEnum} from '../../../ngrx/products.reducer';
import {Store} from '@ngrx/store';
import {NewProductAction, SaveProductAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  productFormGroum: FormGroup | undefined;
  state: ProductsState | undefined;
  submitted = false;
  readonly ProductsStateEnum = ProductsStateEnum;

  constructor(private store: Store, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state => {
      // @ts-ignore
      this.state = state.catalogState;
      if (this.state?.dataState === ProductsStateEnum.NEW) {
        this.productFormGroum = this.formBuilder.group({
          name: ['', Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          selected: [false, Validators.required],
          available: [false, Validators.required],
        });
      }
    });

  }

  // tslint:disable-next-line:typedef
  newProduct() {
    this.store.dispatch(new NewProductAction({}));
  }

  // tslint:disable-next-line:typedef
  saveProduct() {
    this.store.dispatch(new SaveProductAction(this.productFormGroum?.value));

  }
}
