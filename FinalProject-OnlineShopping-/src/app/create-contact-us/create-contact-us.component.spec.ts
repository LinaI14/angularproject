import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactUsComponent } from './create-contact-us.component';

describe('CreateContactUsComponent', () => {
  let component: CreateContactUsComponent;
  let fixture: ComponentFixture<CreateContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
