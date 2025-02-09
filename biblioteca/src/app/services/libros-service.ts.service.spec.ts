import { TestBed } from '@angular/core/testing';

import { LibrosServiceTsService } from './libros-service.ts.service';

describe('LibrosServiceTsService', () => {
  let service: LibrosServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
