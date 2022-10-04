import {createAction} from '@ngrx/store';
import {ButtonState} from './zip-entry.reducer';

export const changeButtonState = createAction('[Zip Entry] Change the buttonState', (buttonState: ButtonState) =>
  ({buttonState}));

export const finishedLoadingWeatherConditions = createAction('[Zip Entry] Finished loading weather conditions');
