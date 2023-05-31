import { TestBed } from '@angular/core/testing';

import { TrevoService } from './trevo.service';

describe('TrevoService', () => {
  let service: TrevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
