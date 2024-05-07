import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "snickers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150"
  };
  @Output() addToCart = new EventEmitter();
  
  onAddCart():void {
    this.addToCart.emit(this.product);
  };
}
