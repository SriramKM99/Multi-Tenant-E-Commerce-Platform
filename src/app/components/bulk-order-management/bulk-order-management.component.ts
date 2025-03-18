import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bulk-order',
  templateUrl: './bulk-order-management.component.html',
  styleUrls: ['./bulk-order-management.component.css'],
  imports: [NgIf], 

})
export class BulkOrderManagementComponent {
  statusMessage: string = '';
  constructor(private router: Router){}

  // Simulate managing bulk orders
  manageBulkOrders() {
    this.statusMessage = 'Processing bulk orders...';
    setTimeout(() => {
      this.statusMessage = 'Bulk orders successfully managed!';
      console.log('Bulk orders processed: 42 orders updated.');
    }, 2000); // Simulates a delay for processing
  }

  // Simulate generating supplier reports
  generateSupplierReports() {
    this.statusMessage = 'Generating supplier reports...';
    setTimeout(() => {
      this.statusMessage = 'Supplier reports generated successfully!';
      console.log('Supplier report summary: 12 active suppliers, 3 flagged for review.');
    }, 2000); // Simulates a delay for generation
  }

  // Simulate logout functionality
  logout() {
    this.statusMessage = 'Logging out...';
    this.router.navigate(['/login'])
    alert('You have successfully logged out!');
  }
}
