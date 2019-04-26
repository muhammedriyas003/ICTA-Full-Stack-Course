import { Component, OnInit } from '@angular/core';
import { productModel } from './product.model';
import {  ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {

  title : String = "Product Management";
  products: productModel[];

  imageWidth: Number =60;
  imageMargin:  Number=2;
  showImage : Boolean = false;

  
  show(): void {

    this.showImage =! this.showImage;
    
  }
  
  constructor( private PS:ProductService ) {}

  ngOnInit():void {
    this.PS.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}

