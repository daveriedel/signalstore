import { TestBed } from '@angular/core/testing';

import { Counthandler } from './counthandler';

describe('Counthandler', () => {
  let service: Counthandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counthandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
