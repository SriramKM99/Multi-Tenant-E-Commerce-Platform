import { Component } from '@angular/core';

@Component({
  selector: 'app-b2c-user-features',
  template: `
    <div class="b2c-user">
      <h2>B2C User Features</h2>
      <button (click)="addToCart()">Add to Cart</button>
      <button (click)="checkout()">Checkout</button>
      <button (click)="addToWishlist()">Add to Wishlist</button>
    </div>
  `,
  styles: [`
    .b2c-user {
      background-color: #f9f9f9; /* Light Theme */
      color: black;
      padding: 16px;
      border-radius: 8px;
    }
    button {
      margin: 8px;
    }
  `]
})
export class AddToCartComponent {
  addToCart() {
    console.log('Item added to cart!');
  }

  checkout() {
    console.log('Checked out successfully!');
  }

  addToWishlist() {
    console.log('Item added to wishlist!');
  }
}
