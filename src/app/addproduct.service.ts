import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProduct } from './components/index/AddProduct';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  uri = 'http://localhost:4000/addproducts';

  constructor(private http: HttpClient) { }

  addAddProduct(product, instock, ware_house) {
    const obj = {
      product: product,
      instock: instock,
      ware_house: ware_house,
      
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAddProducts() {
    return this
           .http
           .get(`${this.uri}`);
}

editAddProduct(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAddProduct(product, instock, ware_house, id) {

  const obj = {
    product: product,
    instock: instock,
    ware_house: ware_house
    
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAddProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
