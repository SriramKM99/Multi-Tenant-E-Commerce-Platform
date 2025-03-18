import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b2b-user-features',
  templateUrl: './bulk-price-management.component.html',
  styleUrls: ['./bulk-price-management.component.css'],
  imports: [NgIf], 

})
export class BulkPriceManagementComponent {
  statusMessage: string = '';
  constructor(private router: Router){}
  // Simulate viewing bulk pricing
  viewBulkPricing() {
    this.statusMessage = 'Fetching bulk pricing details...';
    setTimeout(() => {
      this.statusMessage = 'Bulk pricing displayed successfully!';
      console.log('Bulk pricing details: Product A - $10, Product B - $20.');
    }, 2000); // Simulates fetching data with a delay
  }

  // Placeholder for "Order Large Quantities" functionality
  orderLargeQuantities() {
    this.statusMessage = 'Navigating to Order Large Quantities screen...';
    console.log('Navigating to large quantity orders.');
  }

  // Placeholder for "Generate Reports" functionality
  generateReports() {
    this.statusMessage = 'Navigating to Reports screen...';
    console.log('Navigating to reports.');
  }

  // Placeholder for "Settings" functionality
  navigateToSettings() {
    this.statusMessage = 'Navigating to Settings screen...';
    console.log('Navigating to settings.');
  }

  // Simulate logout functionality
  logout() {
    this.statusMessage = 'Logging out...';
    this.router.navigate(['/login'])
    alert('You have successfully logged out!');
  }
}
