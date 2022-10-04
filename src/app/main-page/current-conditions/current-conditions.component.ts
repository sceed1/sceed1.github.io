import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../weather.service";
import {LocationService} from "../../location.service";
import {Router} from "@angular/router";
import {Store} from '@ngrx/store';
import {interval, Observable} from 'rxjs';
import {LocalCondition, Location} from '../../data/model';
import {selectAllWeatherConditions} from '../weather-state/weather.selectors';
import {refreshAllWeatherLocations} from '../weather-state/weather.action';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  currentWeatherConditions$: Observable<LocalCondition[]>;
  autoRefresh: boolean = false;

  constructor(
    private weatherService : WeatherService,
    private locationService : LocationService,
    private router: Router,
    private store: Store
    ) {
  }

  ngOnInit() {
    this.currentWeatherConditions$ = this.store.select(selectAllWeatherConditions());
    interval(30000).subscribe(
      () => this.autoRefresh ? this.store.dispatch(refreshAllWeatherLocations()) : void 0
    );

  }

  showForecast(location: Location){
    this.router.navigate(['/forecast', location.zipcode, location.countryCode || 'US'])
  }
}
