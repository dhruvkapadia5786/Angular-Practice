import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) { }
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }

    addProduct(product: any) {
      return this.http.post('https://fakestoreapi.com/products', product);
    }

    getProductById(id: number): Observable<Product> {
      return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
    }
}