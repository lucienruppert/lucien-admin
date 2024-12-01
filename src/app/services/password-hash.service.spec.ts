/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordHashService } from './password-hash.service';

describe('Service: PasswordHash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordHashService]
    });
  });

  it('should ...', inject([PasswordHashService], (service: PasswordHashService) => {
    expect(service).toBeTruthy();
  }));
});
