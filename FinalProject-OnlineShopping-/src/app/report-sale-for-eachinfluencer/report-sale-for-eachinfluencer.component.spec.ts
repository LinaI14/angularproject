import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSaleForEachinfluencerComponent } from './report-sale-for-eachinfluencer.component';

describe('ReportSaleForEachinfluencerComponent', () => {
  let component: ReportSaleForEachinfluencerComponent;
  let fixture: ComponentFixture<ReportSaleForEachinfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSaleForEachinfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSaleForEachinfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
