
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private tenantConfig: any;

  constructor(private http: HttpClient) {}

  loadTenantConfig(): Observable<any> {
    let subdomain = window.location.hostname.split('.')[0];
    localStorage.setItem('tenantType', subdomain);
    // if (subdomain === 'localhost') {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   subdomain = urlParams.get('tenant') || 'subdomain1';
    // }

    return this.http.get('/assets/tenants.json').pipe(
      map((config: any) => {
        this.tenantConfig = config[subdomain] || config['retail'];
        
        return this.tenantConfig;
      })
    );
  }

  getTenantConfig() {
    return this.tenantConfig;
  }
  getTenantType(): string | null {
    return localStorage.getItem('tenantType');
  }
}
