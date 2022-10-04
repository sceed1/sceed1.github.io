import {createFeatureSelector, createSelector} from '@ngrx/store';
import {zipEntryFeatureKey, ZipEntryState} from './zip-entry.reducer';

const selectZipEntryState = createFeatureSelector<ZipEntryState>(zipEntryFeatureKey);

export const selectButtonState = () =>
  createSelector(selectZipEntryState, (state) => state.addLocationButtonState);
