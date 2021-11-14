import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashleftComponent } from './dashleft.component';

describe('DashleftComponent', () => {
  let component: DashleftComponent;
  let fixture: ComponentFixture<DashleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
