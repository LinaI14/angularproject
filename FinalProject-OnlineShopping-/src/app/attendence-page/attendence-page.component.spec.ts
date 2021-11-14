import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencePageComponent } from './attendence-page.component';

describe('AttendencePageComponent', () => {
  let component: AttendencePageComponent;
  let fixture: ComponentFixture<AttendencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendencePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
