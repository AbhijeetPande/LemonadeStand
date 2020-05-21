import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
//variables
  ProductListResponse: Product[];
  chosenProduct: Product;
  private productUrl: string = 'assets/data/products.json';
  //constructor
  constructor(private http: HttpClient) { 
    this.fetchProductData();
  }
   
  //populate list function
  fetchProductData() :Product[] {
    this.http.get(this.productUrl).subscribe(data => {
      console.log("this is data: " + JSON.stringify(data));
      this.ProductListResponse = JSON.parse(JSON.stringify(data));
      var ProductListData: Product[] = JSON.parse(JSON.stringify(data));
      console.log(this.ProductListResponse[1].drinkname);
      this.storeProductData(ProductListData);
    })
    return this.ProductListResponse;
  }

  //helper function
  storeProductData(ProductListData: Product[]): void {
    this.ProductListResponse = JSON.parse(JSON.stringify(ProductListData));
  }

  //return function
  getProductData(): Product[] {
    console.log("this is product before sending: " + this.ProductListResponse);
    return this.ProductListResponse;
  }

  returnChosenProduct(): Product {
    return this.chosenProduct;
  }

}
