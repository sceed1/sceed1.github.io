import { createFeatureSelector, createSelector } from '@ngrx/store';
import {weatherFeatureKey, WeatherState} from './weather.reducer';

const selectWeatherState = createFeatureSelector<WeatherState>(weatherFeatureKey);

export const selectAllWeatherConditions = () =>
  createSelector(selectWeatherState, (state) => state.localConditions
    .filter(cond => cond.condition));

export const selectAllWeatherLocations = () =>
  createSelector(selectWeatherState, (state) => state.localConditions
    .map(localCondition => localCondition.location));
