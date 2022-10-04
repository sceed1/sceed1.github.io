import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Store} from '@ngrx/store';
import {addWeatherLocation, removeWeatherLocation} from './main-page/weather-state/weather.action';
import {Location} from './data/model';
import {equalLocations} from './shared/location-util';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations : Location[] = [];

  constructor(private weatherService : WeatherService, private store: Store) {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
    for (let loc of this.locations) {
      this.store.dispatch(addWeatherLocation(loc, 'automatic'));
    }
  }

  addLocation(location: Location){
    this.store.dispatch(addWeatherLocation(location));
    this.locations.push(location);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
  }

  removeLocation(location: Location){
    let loc: Location = this.locations.find(loc => equalLocations(loc, location));
    if (!!loc){
      this.store.dispatch(removeWeatherLocation(loc));
      this.locations = this.locations.filter(location => loc !== location);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }
  }
}
