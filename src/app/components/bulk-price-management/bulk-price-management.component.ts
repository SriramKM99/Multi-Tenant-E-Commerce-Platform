import { Component } from '@angular/core';

@Component({
  selector: 'app-b2b-user-features',
  template: `
    <div class="b2b-user">
      <h2>B2B User Features</h2>
      <button (click)="viewBulkPricing()">View Bulk Pricing</button>
      <button (click)="orderLargeQuantities()">Order Large Quantities</button>
    </div>
  `,
  styles: [`
    .b2b-user {
      background-color: #2a2a2a; /* Dark Theme */
      color: white;
      padding: 16px;
      border-radius: 8px;
    }
    button {
      margin: 8px;
    }
  `]
})
export class BulkPriceManagementComponent {
  viewBulkPricing() {
    console.log('Viewing bulk pricing...');
  }

  orderLargeQuantities() {
    console.log('Ordering in large quantities...');
  }
}
