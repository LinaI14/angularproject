import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotInfluencerComponent } from './repot-influencer.component';

describe('RepotInfluencerComponent', () => {
  let component: RepotInfluencerComponent;
  let fixture: ComponentFixture<RepotInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepotInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
