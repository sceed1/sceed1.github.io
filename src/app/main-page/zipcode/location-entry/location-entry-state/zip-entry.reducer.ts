import {createReducer, on} from '@ngrx/store';
import {changeButtonState, finishedLoadingWeatherConditions} from './zip-entry.action';

export const zipEntryFeatureKey = 'zipEntry';

export type ButtonState = 'initial' | 'loading' | 'done';

export type Modus = 'manual' | 'automatic';

export interface ZipEntryState {
  addLocationButtonState: ButtonState
}

export const initialState: ZipEntryState = {
  addLocationButtonState: 'initial'
};

export const zipEntryReducer = createReducer(
  initialState,
  on(changeButtonState, (_, action) => ({
    addLocationButtonState: action.buttonState
  })),
  on(finishedLoadingWeatherConditions, (_) => ({
    addLocationButtonState: 'done'
  }))
);
