import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice: number = 0.0;
  quantity: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateStatus();


  }
  updateStatus() {
    //subscrinbe from the cart service
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    //subscrinbe from the cart service
    this.cartService.totalQuantity.subscribe(
      data => this.quantity = data
    );
  }

}
