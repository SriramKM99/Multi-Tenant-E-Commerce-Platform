import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderManagementComponent } from './bulk-order-management.component';

describe('BulkOrderManagementComponent', () => {
  let component: BulkOrderManagementComponent;
  let fixture: ComponentFixture<BulkOrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkOrderManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
