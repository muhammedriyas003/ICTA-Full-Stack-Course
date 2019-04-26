import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { productModel } from '../product-list/product.model';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor( private PS:ProductService) { }
  productItem = new productModel (null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
  addProduct ()
  {
    this.PS.newProduct(this.productItem);
    alert("success");
  }
}
