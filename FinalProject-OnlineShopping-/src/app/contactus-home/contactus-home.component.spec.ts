import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusHomeComponent } from './contactus-home.component';

describe('ContactusHomeComponent', () => {
  let component: ContactusHomeComponent;
  let fixture: ComponentFixture<ContactusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
