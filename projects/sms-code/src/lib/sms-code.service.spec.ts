import { TestBed } from '@angular/core/testing';

import { SmsCodeService } from './sms-code.service';

describe('SmsCodeService', () => {
  let service: SmsCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
