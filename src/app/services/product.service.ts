import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products');
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?available=true');
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?selected=true');
  }

  searchProducts(value: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?name_like=' + value);
  }

  changeSelectedProduct(product: any): Observable<Product> {
    return this.http.put<Product>(this.host + '/products/' + product.id, {...product, selected: !product.selected});
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(this.host + '/products/' + id);

  }

  saveProduct(product: any): Observable<Product> {
    return this.http.post<Product>(this.host + '/products/', product);
  }

  getProductById(idProduct: any): Observable<Product> {
    return this.http.get<Product>(this.host + '/products/' + idProduct);
  }

  updateProduct(product: any): Observable<Product> {
    return this.http.put<Product>(this.host + '/products/' + product.id, product);
  }
}
