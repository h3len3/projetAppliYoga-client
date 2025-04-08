import { TestBed } from '@angular/core/testing';

import { AdminCalendarService } from './admin-calendar.service';

describe('AdminCalendarService', () => {
  let service: AdminCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
