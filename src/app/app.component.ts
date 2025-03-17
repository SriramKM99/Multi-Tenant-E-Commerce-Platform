
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { provideStore, StateObservable, Store } from '@ngrx/store';
import { loginSuccess } from './auth/auth.actions';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { authReducer } from './auth/auth.reducer';
import { TenantService } from './services/tenant.service';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true, // Required for standalone components
  imports: [RouterModule,HttpClientModule, CommonModule,RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  tenant: any;

  constructor(private tenantService: TenantService, private router: Router) {}

  ngOnInit() {
    this.tenantService.loadTenantConfig().subscribe(config => {
      if (config) {
        this.tenant = config;
        
        // Apply theme colors dynamically
        document.documentElement.style.setProperty('--primary-color', config.theme.primary);
        document.documentElement.style.setProperty('--secondary-color', config.theme.secondary);
        
        // Navigate to the correct layout
        if (config.layout === 'side-nav') {
          this.router.navigate(['/dashboard']);
        } else if (config.layout === 'top-nav') {
          this.router.navigate(['/top-nav/dashboard']);
        }
      }
    });
  }
}