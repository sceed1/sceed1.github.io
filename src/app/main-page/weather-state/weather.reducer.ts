import {createReducer, on} from '@ngrx/store';
import {addWeatherLocation, removeWeatherLocation, setCurrentConditionsForLocation} from './weather.action';
import {APIWeatherConditions, LocalCondition, Location} from '../../data/model';
import {equalLocations} from '../../shared/location-util';


export const weatherFeatureKey = 'weather';

export interface WeatherState {
  localConditions: LocalCondition[],
}

export const initialState: WeatherState = {
  localConditions: []
};

export const weatherReducer = createReducer(
  initialState,
  on(addWeatherLocation, (state, action) => ({
    localConditions: state.localConditions.find(cond => (equalLocations(cond.location, action.location)))
      ? state.localConditions
      : state.localConditions.concat({
        location: action.location,
        condition: undefined
      })
  })),
  on(setCurrentConditionsForLocation, (state, action) => ({
    ...state,
    localConditions: setConditionForLocationWithZipcode(action.location, action.conditions, state.localConditions)
  })),
  on(removeWeatherLocation, (state, action) => ({
    localConditions: state.localConditions.filter(cond => !equalLocations(cond.location, action.location))
  }))
);

const setConditionForLocationWithZipcode = (location: Location, condition: APIWeatherConditions, state: LocalCondition[]): LocalCondition[] => {
  const localConditions: LocalCondition[] = JSON.parse(JSON.stringify(state));
  localConditions.map(cond => {
    if (equalLocations(cond.location, location)) {
      cond.condition = condition;
    }
  })
  return localConditions;
}
