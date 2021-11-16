import { TestBed } from '@angular/core/testing';

import { RepotService } from './repot.service';

describe('RepotService', () => {
  let service: RepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
