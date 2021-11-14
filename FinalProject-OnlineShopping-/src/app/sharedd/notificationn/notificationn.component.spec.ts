import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationnComponent } from './notificationn.component';

describe('NotificationnComponent', () => {
  let component: NotificationnComponent;
  let fixture: ComponentFixture<NotificationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
