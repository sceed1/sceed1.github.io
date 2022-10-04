import { createAction } from '@ngrx/store';
import {APIWeatherConditions, Location} from '../../data/model';
import {Modus} from '../zipcode/location-entry/location-entry-state/zip-entry.reducer';

export const addWeatherLocation = createAction('[Main Page] Add Weather Location',
  (location: Location, modus: Modus = 'manual') => ({location, modus}));

export const removeWeatherLocation = createAction('[Main Page] Remove Weather Location',
  (location: Location) => ({location}));

export const refreshAllWeatherLocations = createAction('[Main Page] Refresh all tracked weather conditions');

export const setCurrentConditionsForLocation = createAction('[Main Page] Set current weather conditions for location',
  (location: Location, conditions: APIWeatherConditions) => ({location, conditions}));


