import { TestBed } from '@angular/core/testing';

import { ActivateStepTwoGuard } from './activate-step-two.guard';

describe('ActivateStepTwoGuard', () => {
  let guard: ActivateStepTwoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateStepTwoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
