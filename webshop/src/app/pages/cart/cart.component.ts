import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

export interface CartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
};

export interface Cart {
  items: Array<CartItem>;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: Cart = {
    items: [{
      product: "https://via.placeholder.com/150",
      name: "snickers",
      price: 150,
      quantity: 1,
      id: 1
    }, {
      product: "https://via.placeholder.com/150",
      name: "snickers",
      price: 150,
      quantity: 3,
      id: 2
    }]
  };
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ["product", "name", "price", "quantity", "total", "action"];


  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  };

  onClearCart(): void {
    this.cartService.clearCart();
  };

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  };

  onAddQuantity(item: CartItem):void {
    this.cartService.addToCart(item);
  };
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
