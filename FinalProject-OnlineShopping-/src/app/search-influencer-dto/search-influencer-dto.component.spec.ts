import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfluencerDTOComponent } from './search-influencer-dto.component';

describe('SearchInfluencerDTOComponent', () => {
  let component: SearchInfluencerDTOComponent;
  let fixture: ComponentFixture<SearchInfluencerDTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInfluencerDTOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfluencerDTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
