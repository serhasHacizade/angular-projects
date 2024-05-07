import { Component, OnInit } from '@angular/core';
import { Cart } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webshop';
  cart: Cart = {items: []};
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart
    })
  }
}
