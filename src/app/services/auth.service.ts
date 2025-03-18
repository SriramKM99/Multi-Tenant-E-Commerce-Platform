import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles: string[] = [];
  private tenant: string = '';
  constructor(private router: Router) {}

  login(role: 'Admin' | 'User', tenant: 'B2B' | 'B2C') {
    this.roles = [role]; // Assign roles (Admin/User)
    this.tenant = tenant; // Assign tenant (B2B/B2C)
    localStorage.setItem('roles', JSON.stringify(this.roles))
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem('roles');
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('roles')!);
  }

  isAdmin() {
    return this.getUser()?.role === 'Admin';
  }
}
