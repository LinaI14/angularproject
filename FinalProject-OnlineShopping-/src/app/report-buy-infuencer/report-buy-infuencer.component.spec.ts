import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuyInfuencerComponent } from './report-buy-infuencer.component';

describe('ReportBuyInfuencerComponent', () => {
  let component: ReportBuyInfuencerComponent;
  let fixture: ComponentFixture<ReportBuyInfuencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBuyInfuencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBuyInfuencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
