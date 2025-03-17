import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-nav-layout',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  imports: [CommonModule,MatSidenavModule,MatListModule],
})
export class SideNavComponent {
constructor(private router: Router){}
  navigateToBulkOrdering() {
    this.router.navigate(['/add-to-cart']);
  }
  navigateToBulkPricing() {
    this.router.navigate(['/discount-management']);
  }
 
}
