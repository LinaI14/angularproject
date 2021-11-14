import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileeComponent } from './userprofilee.component';

describe('UserprofileeComponent', () => {
  let component: UserprofileeComponent;
  let fixture: ComponentFixture<UserprofileeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofileeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
