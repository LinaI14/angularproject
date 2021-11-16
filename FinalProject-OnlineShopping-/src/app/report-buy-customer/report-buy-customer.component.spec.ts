import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuyCustomerComponent } from './report-buy-customer.component';

describe('ReportBuyCustomerComponent', () => {
  let component: ReportBuyCustomerComponent;
  let fixture: ComponentFixture<ReportBuyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuyCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
