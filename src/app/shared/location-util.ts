import {Location} from '../data/model';

export const equalLocations = (loc1: Location, loc2: Location) =>
  loc1.zipcode === loc2.zipcode && loc1.countryCode === loc2.countryCode;
