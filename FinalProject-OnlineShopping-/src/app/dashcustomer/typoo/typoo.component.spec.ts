import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypooComponent } from './typoo.component';

describe('TypooComponent', () => {
  let component: TypooComponent;
  let fixture: ComponentFixture<TypooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
