import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EulerEffects } from './euler.effects';

describe('EulerEffects', () => {
  let actions$: Observable<any>;
  let effects: EulerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EulerEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(EulerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
