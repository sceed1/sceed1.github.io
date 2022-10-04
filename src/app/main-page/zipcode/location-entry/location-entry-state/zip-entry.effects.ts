import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeButtonState, finishedLoadingWeatherConditions} from './zip-entry.action';
import {delay, map} from 'rxjs';



@Injectable()
export class ZipEntryEffects {

  constructor(private actions$: Actions) {}

  resetButtonStateAfterFinishLoading$ = createEffect(() => this.actions$.pipe(
    ofType(finishedLoadingWeatherConditions),
    delay(500),
    map(() => changeButtonState('initial'))
  ));
}
