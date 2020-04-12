import { TestBed } from '@angular/core/testing';

import { NgEasyProgressBarService } from './ng-easy-progress-bar.service';

describe('NgEasyProgressBarService', () => {
  let service: NgEasyProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgEasyProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
