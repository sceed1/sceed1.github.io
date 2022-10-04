import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../environments/environment';
import {weatherReducer, weatherFeatureKey, WeatherState} from './main-page/weather-state/weather.reducer';
import {
  zipEntryFeatureKey,
  zipEntryReducer,
  ZipEntryState
} from './main-page/zipcode/location-entry/location-entry-state/zip-entry.reducer';


export interface State {
  [weatherFeatureKey]: WeatherState;
  [zipEntryFeatureKey]: ZipEntryState;
}

export const reducers: ActionReducerMap<State> = {
  [weatherFeatureKey]: weatherReducer,
  [zipEntryFeatureKey]: zipEntryReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
