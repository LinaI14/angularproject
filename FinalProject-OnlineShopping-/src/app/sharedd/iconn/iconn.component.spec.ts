import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconnComponent } from './iconn.component';

describe('IconnComponent', () => {
  let component: IconnComponent;
  let fixture: ComponentFixture<IconnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
