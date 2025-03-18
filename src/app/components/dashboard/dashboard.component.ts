import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { TenantService } from '../../services/tenant.service';
import { SideNavComponent } from '../../layouts/side-nav/side-nav.component';
import { TopNavComponent } from '../../layouts/top-nav/top-nav.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { BulkOrderManagementComponent } from '../bulk-order-management/bulk-order-management.component';
import { BulkPriceManagementComponent } from '../bulk-price-management/bulk-price-management.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DiscountManagementComponent } from '../discount-management/discount-management.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule,NgIf,TopNavComponent,SideNavComponent],
})
export class DashboardComponent {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true }) dynamicComponent!: ViewContainerRef;

  layout: string = 'topnav';

  constructor(private authService: AuthService,
    private tenantService: TenantService,private location: Location,private router: Router
   ) {
    this.location.subscribe(() => {
      this.router.navigate(['/login']);
    });
   }

  ngOnInit() {
    const role = this.authService.getUser();
    const tenant = this.tenantService.getTenantConfig().name;
    const tenantConfig = this.tenantService.getTenantConfig();
    this.layout = tenantConfig.layout;
    let component: any;

    if (tenant === 'B2B Wholesale Store') {
      if (role === 'Admin') {
        component = BulkOrderManagementComponent;
      } else if (role === 'User') {
        component = BulkPriceManagementComponent;
      }
    } else if (tenant === 'B2C Retail Store') {
      if (role === 'Admin') {
        component = DiscountManagementComponent;
      } else if (role === 'User') {
        component = AddToCartComponent;
      }
    }

    // if (component) {
    //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    //   this.dynamicComponent.clear();
    //   this.dynamicComponent.createComponent(componentFactory);
    // }
  
  }
}
