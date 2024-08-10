import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL-ul de baza pentru API-ul de produse
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // pentru a obtine lista de produse
  getProductList(): Observable<Product[]>{
    // face un GET request sa ia data-ul, face unwrap si il trimite ca un array de produse
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
