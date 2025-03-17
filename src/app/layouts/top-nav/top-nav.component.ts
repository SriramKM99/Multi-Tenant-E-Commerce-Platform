import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantService } from '../../services/tenant.service';

@Component({
  selector: 'app-top-nav-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  
})
export class TopNavComponent  {
  logoUrl: string = '';

  constructor(private tenantService: TenantService) {}

  ngOnInit() {
    const tenantConfig = this.tenantService.getTenantConfig();
    this.logoUrl = tenantConfig.logo;
  }
  
}
