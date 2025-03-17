import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BulkOrderManagementComponent } from './components/bulk-order-management/bulk-order-management.component';
import { BulkPriceManagementComponent } from './components/bulk-price-management/bulk-price-management.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { DiscountManagementComponent } from './discount-management/discount-management.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bulk-order', component: BulkOrderManagementComponent },
    { path: 'bulk-pricing', component: BulkPriceManagementComponent },
    { path: 'add-to-cart', component: AddToCartComponent },
    { path: 'discount-management', component: DiscountManagementComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'user', component: UserComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },

    
    
    
  ];