import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule, CommonModule,FormsModule,ReactiveFormsModule], 
})
export class LoginComponent implements OnInit {
  tenant: any;
  loginForm: FormGroup;
  value:any
  constructor(
    private tenantService: TenantService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^\S.*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^\S.*$/)]],
      role: ['User', Validators.required]
    });
  }

  ngOnInit() {
    this.tenantService.loadTenantConfig().subscribe(config => {
      this.tenant = config;
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('Please fill in all required fields.');
      return;
    }
    else{const { username, password, role } = this.loginForm.value;

    this.authService.login(role, this.tenant);

    if (role === 'Admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }}

    
  }
}