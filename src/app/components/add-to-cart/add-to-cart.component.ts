import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart.component',
  imports: [NgIf], 
  template: `
    <div class="layout">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <h1>Retail User Portal</h1>
        <button class="logout-button" (click)="logout()">Logout</button>
      </nav>

      <!-- Main Content Area -->
      <div class="card-container">
        <div class="card" (click)="addToCart()">
          <h3>Add to Cart</h3>
          <p>Add items to your shopping cart.</p>
        </div>
        <div class="card" (click)="checkout()">
          <h3>Checkout</h3>
          <p>Proceed to checkout securely.</p>
        </div>
        <div class="card" (click)="addToWishlist()">
          <h3>Add to Wishlist</h3>
          <p>Save items for later purchase.</p>
        </div>
      </div>

      <p class="status-message" *ngIf="statusMessage">{{ statusMessage }}</p>
    </div>
  `,
  styles: [`
    /* Full page layout */
    .layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: linear-gradient(120deg, #f6d365, #fda085);
      font-family: Arial, sans-serif;
    }

    /* Top navigation bar */
    .top-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333333;
      color: white;
      padding: 10px 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .top-nav h1 {
      margin: 0;
      font-size: 1.5em;
    }

    .logout-button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .logout-button:hover {
      background-color: #ff3333;
      transform: scale(1.05);
    }

    /* Centered card container */
    .card-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }

    /* Card styling */
    .card {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      text-align: center;
      width: 250px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    h3 {
      color: #333333;
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    p {
      color: #555555;
      font-size: 1em;
    }

    /* Status message */
    .status-message {
      text-align: center;
      margin-top: 20px;
      font-size: 1.1em;
      color: #FFD700;
      font-style: italic;
    }
  `]
})
export class AddToCartComponent {
  statusMessage: string = '';
  constructor(private router: Router){}
  // Simulate adding an item to the cart
  addToCart() {
    this.statusMessage = 'Adding item to cart...';
    setTimeout(() => {
      this.statusMessage = 'Item added to cart successfully!';
      console.log('Item added to cart.');
    }, 2000);
  }

  // Simulate checkout process
  checkout() {
    this.statusMessage = 'Processing checkout...';
    setTimeout(() => {
      this.statusMessage = 'Checkout completed successfully!';
      console.log('Checkout process complete.');
    }, 2000);
  }

  // Simulate adding an item to the wishlist
  addToWishlist() {
    this.statusMessage = 'Adding item to wishlist...';
    setTimeout(() => {
      this.statusMessage = 'Item added to wishlist successfully!';
      console.log('Item added to wishlist.');
    }, 2000);
  }

  // Simulate logout functionality
  logout() {
    this.statusMessage = 'Logging out...';
    this.router.navigate(['/login'])
    alert('You have successfully logged out!');
  }
}
