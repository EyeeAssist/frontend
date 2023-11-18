import { TestBed } from '@angular/core/testing';

import { TokenLibraryService } from './token-service.service';

describe('TokenServiceService', () => {
  let service: TokenLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
