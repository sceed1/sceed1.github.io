import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ZipEntryEffects } from './zip-entry.effects';

describe('ZipEntryEffects', () => {
  let actions$: Observable<any>;
  let effects: ZipEntryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ZipEntryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ZipEntryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
