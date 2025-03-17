import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  retail = false;
  wholeSale = false;

  constructor(private tenantService: TenantService,private router: Router) {}

ngOnInit(): void {
  const tenant = this.tenantService.getTenantType();

  // Navigate to the appropriate route based on the tenant
  if (tenant === 'wholesale') {
    this.router.navigate(['/bulk-pricing']); // Redirect to B2B Admin Features
  } else if (tenant === 'retail') {
    this.router.navigate(['/add-to-cart']); // Redirect to B2C Admin Features
  } else {
    this.router.navigate(['/unauthorized']); // Handle unknown tenant or error
  }
}
}
