import {Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {
  addWeatherLocation,
  refreshAllWeatherLocations,
  setCurrentConditionsForLocation
} from './weather.action';
import {catchError, filter, first, map, mergeMap, switchMap} from 'rxjs';
import {WeatherService} from '../../weather.service';
import {selectAllWeatherConditions, selectAllWeatherLocations} from './weather.selectors';
import {Store} from '@ngrx/store';
import {
  changeButtonState,
  finishedLoadingWeatherConditions
} from '../zipcode/location-entry/location-entry-state/zip-entry.action';
import {equalLocations} from '../../shared/location-util';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService, private store: Store) {}

  changeButtonStateToLoading$ = createEffect(() => this.actions$.pipe(
    ofType(addWeatherLocation),
    filter(action => action.modus === 'manual'),
    concatLatestFrom(() => this.store.select(selectAllWeatherConditions())),
    filter(([action, conditions]) => !conditions?.find(cond => equalLocations(cond.location, action.location))),
    map(() => changeButtonState('loading'))
  ))

  loadWeatherConditionForZipcode$ = createEffect(() => this.actions$.pipe(
    ofType(addWeatherLocation),
    concatLatestFrom(() => this.store.select(selectAllWeatherConditions())),
    filter(([action, conditions]) => !conditions?.find(cond => equalLocations(cond.location, action.location))),
    switchMap(([action, ]) => this.weatherService.fetchCurrentConditionsForLocation(action.location).pipe(
      mergeMap((condition) => {
        let actions: any[] = [setCurrentConditionsForLocation(action.location, condition)];
        if (action.modus === 'manual') {
          actions.push(finishedLoadingWeatherConditions())
        }
        return actions
      }),
      catchError(() => [changeButtonState('initial')])
      )
    )
  ));

  refreshWeatherForAllLocations$ = createEffect(() => this.actions$.pipe(
    ofType(refreshAllWeatherLocations),
     switchMap(() => this.store.select(selectAllWeatherLocations()).pipe(
       first(),
       mergeMap(locations => locations.values()),
       mergeMap(location => this.weatherService.fetchCurrentConditionsForLocation(location).pipe(
         map(conditions => setCurrentConditionsForLocation(location, conditions)))
       )
     )),
  ));
}
