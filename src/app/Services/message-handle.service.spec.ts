import { TestBed } from '@angular/core/testing';

import { MessageHandleService } from './message-handle.service';

describe('MessageHandleService', () => {
  let service: MessageHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
