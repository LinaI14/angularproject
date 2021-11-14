import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantPageComponent } from './accountant-page.component';

describe('AccountantPageComponent', () => {
  let component: AccountantPageComponent;
  let fixture: ComponentFixture<AccountantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
