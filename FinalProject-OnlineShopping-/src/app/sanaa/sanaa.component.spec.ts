import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaaComponent } from './sanaa.component';

describe('SanaaComponent', () => {
  let component: SanaaComponent;
  let fixture: ComponentFixture<SanaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
