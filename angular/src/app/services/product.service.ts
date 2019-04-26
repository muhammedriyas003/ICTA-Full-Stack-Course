import { Injectable } from '@angular/core';
// import { productModel } from '../components/product-list/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts()
  
  {
    return this.http.get('http://localhost:3000/products')
  }

    newProduct(item)
    {
      return this.http.post('http://localhost:3000/insert',{'product':item})
      .subscribe(data=>{console.log(data)})
    }
  constructor( private http:HttpClient) 
  { }
}
