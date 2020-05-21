import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() completeList: Product[];
selectedProduct: Product;
  constructor(private productService: ProductService) { }
  printNewSelection() {
    if (!this.selectedProduct) {

    }
    else {
      console.log("this is the selection currently: " + this.selectedProduct.drinkname);
    }
  }
  onSubmit() {
    if (!this.selectedProduct) {
      console.log("invalid data");
    }
    else {
      this.productService.chosenProduct = JSON.parse(JSON.stringify(this.selectedProduct));
    }
  }

  ngOnInit(): void {
    this.completeList = this.productService.getProductData();
  }

}
