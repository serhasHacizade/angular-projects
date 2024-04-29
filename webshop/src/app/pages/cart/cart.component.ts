import { Component, OnInit } from '@angular/core';

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
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = ["product", "name", "price", "quantity", "total", "action"];

  ngOnInit() {
    this.dataSource = this.cart.items;
  };

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  };
}
