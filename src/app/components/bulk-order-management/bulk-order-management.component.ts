// import { NgFor } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-bulk-order-management',
//   templateUrl: './bulk-order-management.component.html',
//   styleUrls: ['./bulk-order-management.component.css'],
//   imports:[NgFor,FormsModule,ReactiveFormsModule]
// })
// export class BulkOrderManagementComponent implements OnInit {
//   bulkOrderForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.bulkOrderForm = this.fb.group({
//       orders: this.fb.array([this.createOrderGroup()])
//     });
//   }

//   get orders(): FormArray {
//     return this.bulkOrderForm.get('orders') as FormArray;
//   }

//   createOrderGroup(): FormGroup {
//     return this.fb.group({
//       productId: ['', Validators.required],
//       quantity: [1, [Validators.required, Validators.min(1)]],
//       price: [0, [Validators.required, Validators.min(0)]]
//     });
//   }

//   addOrder() {
//     this.orders.push(this.createOrderGroup());
//   }

//   removeOrder(index: number) {
//     this.orders.removeAt(index);
//   }

//   onSubmit() {
//     if (this.bulkOrderForm.valid) {
//       const bulkOrders = this.bulkOrderForm.value.orders;
//       // Process bulk orders (e.g., send to backend service)
//       console.log('Bulk Orders:', bulkOrders);
//     }
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-b2b-admin-features',
  template: `
    <div class="b2b-admin">
      <h2>B2B Admin Features</h2>
      <button (click)="manageBulkOrders()">Manage Bulk Orders</button>
      <button (click)="generateSupplierReports()">Generate Supplier Reports</button>
    </div>
  `,
  styles: [`
    .b2b-admin {
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
export class BulkOrderManagementComponent {
  manageBulkOrders() {
    console.log('Bulk orders managed!');
  }

  generateSupplierReports() {
    console.log('Supplier reports generated!');
  }
}
