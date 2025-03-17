import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPriceManagementComponent } from './bulk-price-management.component';

describe('BulkPriceManagementComponent', () => {
  let component: BulkPriceManagementComponent;
  let fixture: ComponentFixture<BulkPriceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkPriceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkPriceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
