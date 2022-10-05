import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ForecastsListComponent} from './forecast/forecasts-list/forecasts-list.component';

const appRoutes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast/:zipcode/country/:countryCode', component: ForecastsListComponent
  }
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
