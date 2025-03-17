import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule, CommonModule,FormsModule,ReactiveFormsModule], 
})
export class LoginComponent implements OnInit {
  tenant: any;
  username: string = '';
  password: string = '';

  constructor(private tenantService: TenantService, private authService: AuthService,private router: Router) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required), // ✅ Ensure it's never null
    password: new FormControl('', Validators.required)  // ✅ Ensure it's never null
  });
  role = 'User';
  ngOnInit() {
    this.tenantService.loadTenantConfig().subscribe(config => {
      this.tenant = config;
    });
  }

  onLogin() {
    // if (this.loginForm.valid) {
    //   const credentials = {
    //     username: this.loginForm.get('username')?.value ?? '', // ✅ Ensure string
    //     password: this.loginForm.get('password')?.value ?? ''  // ✅ Ensure string
    //   };
    //   this.authService.login(credentials);
    // } else {
    //   alert('Please enter username and password');
    // }
  
  this.authService.login(this.role as 'Admin' | 'User', this.tenant); // Mock login function
  if (this.role === 'Admin') {
    this.router.navigate(['/admin']);
  } else {
    this.router.navigate(['/user']);
  }
}
}
