import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from './components/product-box/product-box.component';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  };

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  };

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  };
};
