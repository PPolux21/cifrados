import { TestBed } from '@angular/core/testing';

import { Cipher } from './cipher';

describe('Cipher', () => {
  let service: Cipher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cipher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
