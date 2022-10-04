import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationEntryComponent } from './main-page/zipcode/location-entry/location-entry.component';
import {LocationService} from "./location.service";
import { ForecastsListComponent } from './forecast/forecasts-list/forecasts-list.component';
import {WeatherService} from "./weather.service";
import { CurrentConditionsComponent } from './main-page/current-conditions/current-conditions.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {WeatherEffects} from './main-page/weather-state/weather.effects';
import {ZipEntryEffects} from './main-page/zipcode/location-entry/location-entry-state/zip-entry.effects';
import { TemplateButtonComponent } from './shared/template-button/template-button.component';
import { CountryInputComponent } from './main-page/zipcode/location-entry/country-input/country-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationEntryComponent,
    CurrentConditionsComponent,
    ForecastsListComponent,
    MainPageComponent,
    TemplateButtonComponent,
    CountryInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([WeatherEffects, ZipEntryEffects]),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ReactiveFormsModule
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
