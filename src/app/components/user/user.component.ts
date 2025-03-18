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
  if (tenant === 'wholesale-store-4bdac') {
    this.router.navigate(['/bulk-pricing']); 
  } else if (tenant === 'retail-store-3fbb0') {
    this.router.navigate(['/add-to-cart']); 
  } else {
    this.router.navigate(['/unauthorized']);
  }
}
}
