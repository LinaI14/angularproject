import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeeComponent } from './upgradee.component';

describe('UpgradeeComponent', () => {
  let component: UpgradeeComponent;
  let fixture: ComponentFixture<UpgradeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
