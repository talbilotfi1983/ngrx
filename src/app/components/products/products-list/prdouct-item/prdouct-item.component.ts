import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {DeleteProductAction, GetAllProductsAction, SelectProductAction} from '../../../../ngrx/products.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-prdouct-item',
  templateUrl: './prdouct-item.component.html',
  styleUrls: ['./prdouct-item.component.css']
})
export class PrdouctItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSelectProduct(product: Product) {
    this.store.dispatch(new SelectProductAction(product));
  }

  // tslint:disable-next-line:typedef
  onDeleteProduct(id: number) {
    console.log(id);
    this.store.dispatch(new DeleteProductAction(id));
  }

  // tslint:disable-next-line:typedef
  onEditProduct(product: Product) {
  }
}
