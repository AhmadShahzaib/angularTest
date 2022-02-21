import { TestBed } from '@angular/core/testing';

import { TableChildService } from './table-child.service';

describe('TableChildService', () => {
  let service: TableChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
