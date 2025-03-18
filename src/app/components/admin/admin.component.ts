import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TenantService } from '../../services/tenant.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  retail = false;
  wholeSale = false;

  constructor(private tenantService: TenantService,private router: Router) {}

ngOnInit(): void {
  const tenant = this.tenantService.getTenantType();
  
  // Navigate to the appropriate route based on the tenant
  if (tenant === 'multi-tenant-e-commerce-a8bdc') {
    this.router.navigate(['/bulk-order']); // Redirect to B2B Admin Features
  } else if (tenant === 'localhost1') {
    this.router.navigate(['/discount-management']); // Redirect to B2C Admin Features
  } else {
    this.router.navigate(['/unauthorized']); // Handle unknown tenant or error
  }
}
  
}
