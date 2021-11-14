import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablelisttComponent } from './tablelistt.component';

describe('TablelisttComponent', () => {
  let component: TablelisttComponent;
  let fixture: ComponentFixture<TablelisttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablelisttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablelisttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
