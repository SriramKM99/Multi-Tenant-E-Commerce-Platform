import { Component } from '@angular/core';

@Component({
  selector: 'app-b2c-admin-features',
  template: `
    <div class="b2c-admin">
      <h2>B2C Admin Features</h2>
      <button (click)="manageDiscounts()">Manage Discounts</button>
      <button (click)="viewCustomerAnalytics()">View Customer Analytics</button>
    </div>
  `,
  styles: [`
    .b2c-admin {
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
export class DiscountManagementComponent {
  manageDiscounts() {
    console.log('Managing discounts...');
  }

  viewCustomerAnalytics() {
    console.log('Viewing customer analytics...');
  }
}
