"use strict";
(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_page_zipcode_location_entry_location_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/zipcode/location-entry/location-entry.component */ 960);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 8056);
/* harmony import */ var _forecast_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast/forecasts-list/forecasts-list.component */ 5242);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 7187);
/* harmony import */ var _main_page_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/current-conditions/current-conditions.component */ 180);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ 2050);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store-devtools */ 8896);
/* harmony import */ var _main_page_weather_state_weather_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/weather-state/weather.effects */ 7824);
/* harmony import */ var _main_page_zipcode_location_entry_location_entry_state_zip_entry_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/zipcode/location-entry/location-entry-state/zip-entry.effects */ 8604);
/* harmony import */ var _shared_template_button_template_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/template-button/template-button.component */ 4634);
/* harmony import */ var _main_page_zipcode_location_entry_country_input_country_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/zipcode/location-entry/country-input/country-input.component */ 6650);
























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _main_page_zipcode_location_entry_location_entry_component__WEBPACK_IMPORTED_MODULE_1__.LocationEntryComponent,
            _main_page_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent,
            _forecast_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent,
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent,
            _shared_template_button_template_button_component__WEBPACK_IMPORTED_MODULE_12__.TemplateButtonComponent,
            _main_page_zipcode_location_entry_country_input_country_input_component__WEBPACK_IMPORTED_MODULE_13__.CountryInputComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forRoot({}, {}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__.EffectsModule.forRoot([_main_page_weather_state_weather_effects__WEBPACK_IMPORTED_MODULE_10__.WeatherEffects, _main_page_zipcode_location_entry_location_entry_state_zip_entry_effects__WEBPACK_IMPORTED_MODULE_11__.ZipEntryEffects]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forRoot(_index__WEBPACK_IMPORTED_MODULE_9__.reducers, { metaReducers: _index__WEBPACK_IMPORTED_MODULE_9__.metaReducers }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__.StoreDevtoolsModule.instrument() : [],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule
        ],
        providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _forecast_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast/forecasts-list/forecasts-list.component */ 5242);



const appRoutes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent
    },
    {
        path: 'forecast/:zipcode/:countryCode', component: _forecast_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__.ForecastsListComponent
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ 5242:
/*!*********************************************************************!*\
  !*** ./src/app/forecast/forecasts-list/forecasts-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastsListComponent": () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 1606);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 9975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../weather.service */ 7187);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let ForecastsListComponent = class ForecastsListComponent {
    constructor(weatherService, route) {
        this.weatherService = weatherService;
        route.params.subscribe(params => {
            this.zipcode = params['zipcode'];
            this.countryCode = params['countryCode'];
            weatherService.getForecast({ zipcode: this.zipcode, countryCode: this.countryCode })
                .subscribe(data => this.forecast = data);
        });
    }
};
ForecastsListComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ForecastsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forecasts-list',
        template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForecastsListComponent);



/***/ }),

/***/ 2050:
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _main_page_weather_state_weather_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/weather-state/weather.reducer */ 8379);
/* harmony import */ var _main_page_zipcode_location_entry_location_entry_state_zip_entry_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/zipcode/location-entry/location-entry-state/zip-entry.reducer */ 5223);



const reducers = {
    [_main_page_weather_state_weather_reducer__WEBPACK_IMPORTED_MODULE_1__.weatherFeatureKey]: _main_page_weather_state_weather_reducer__WEBPACK_IMPORTED_MODULE_1__.weatherReducer,
    [_main_page_zipcode_location_entry_location_entry_state_zip_entry_reducer__WEBPACK_IMPORTED_MODULE_2__.zipEntryFeatureKey]: _main_page_zipcode_location_entry_location_entry_state_zip_entry_reducer__WEBPACK_IMPORTED_MODULE_2__.zipEntryReducer
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];


/***/ }),

/***/ 8056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATIONS": () => (/* binding */ LOCATIONS),
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ 7187);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _main_page_weather_state_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/weather-state/weather.action */ 3948);
/* harmony import */ var _shared_location_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/location-util */ 7501);






const LOCATIONS = "locations";
let LocationService = class LocationService {
    constructor(weatherService, store) {
        this.weatherService = weatherService;
        this.store = store;
        this.locations = [];
        let locString = localStorage.getItem(LOCATIONS);
        if (locString)
            this.locations = JSON.parse(locString);
        for (let loc of this.locations) {
            this.store.dispatch((0,_main_page_weather_state_weather_action__WEBPACK_IMPORTED_MODULE_1__.addWeatherLocation)(loc, 'automatic'));
        }
    }
    addLocation(location) {
        this.store.dispatch((0,_main_page_weather_state_weather_action__WEBPACK_IMPORTED_MODULE_1__.addWeatherLocation)(location));
        this.locations.push(location);
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }
    removeLocation(location) {
        let loc = this.locations.find(loc => (0,_shared_location_util__WEBPACK_IMPORTED_MODULE_2__.equalLocations)(loc, location));
        if (!!loc) {
            this.store.dispatch((0,_main_page_weather_state_weather_action__WEBPACK_IMPORTED_MODULE_1__.removeWeatherLocation)(loc));
            this.locations = this.locations.filter(location => loc !== location);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        }
    }
};
LocationService.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store }
];
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], LocationService);



/***/ }),

/***/ 180:
/*!******************************************************************************!*\
  !*** ./src/app/main-page/current-conditions/current-conditions.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsComponent": () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 8552);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../weather.service */ 7187);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../location.service */ 8056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var _weather_state_weather_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather-state/weather.selectors */ 5810);
/* harmony import */ var _weather_state_weather_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weather-state/weather.action */ 3948);











let CurrentConditionsComponent = class CurrentConditionsComponent {
    constructor(weatherService, locationService, router, store) {
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.router = router;
        this.store = store;
        this.autoRefresh = false;
    }
    ngOnInit() {
        this.currentWeatherConditions$ = this.store.select((0,_weather_state_weather_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAllWeatherConditions)());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(30000).subscribe(() => this.autoRefresh ? this.store.dispatch((0,_weather_state_weather_action__WEBPACK_IMPORTED_MODULE_5__.refreshAllWeatherLocations)()) : void 0);
    }
    showForecast(location) {
        this.router.navigate(['/forecast', location.zipcode, location.countryCode || 'US']);
    }
};
CurrentConditionsComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store }
];
CurrentConditionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-current-conditions',
        template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrentConditionsComponent);



/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let MainPageComponent = class MainPageComponent {
};
MainPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-main-page',
        template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], MainPageComponent);



/***/ }),

/***/ 3948:
/*!***********************************************************!*\
  !*** ./src/app/main-page/weather-state/weather.action.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addWeatherLocation": () => (/* binding */ addWeatherLocation),
/* harmony export */   "refreshAllWeatherLocations": () => (/* binding */ refreshAllWeatherLocations),
/* harmony export */   "removeWeatherLocation": () => (/* binding */ removeWeatherLocation),
/* harmony export */   "setCurrentConditionsForLocation": () => (/* binding */ setCurrentConditionsForLocation)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const addWeatherLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Main Page] Add Weather Location', (location, modus = 'manual') => ({ location, modus }));
const removeWeatherLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Main Page] Remove Weather Location', (location) => ({ location }));
const refreshAllWeatherLocations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Main Page] Refresh all tracked weather conditions');
const setCurrentConditionsForLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Main Page] Set current weather conditions for location', (location, conditions) => ({ location, conditions }));


/***/ }),

/***/ 7824:
/*!************************************************************!*\
  !*** ./src/app/main-page/weather-state/weather.effects.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherEffects": () => (/* binding */ WeatherEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _weather_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.action */ 3948);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weather.service */ 7187);
/* harmony import */ var _weather_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.selectors */ 5810);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _zipcode_location_entry_location_entry_state_zip_entry_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zipcode/location-entry/location-entry-state/zip-entry.action */ 2102);
/* harmony import */ var _shared_location_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/location-util */ 7501);










let WeatherEffects = class WeatherEffects {
    constructor(actions$, weatherService, store) {
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.store = store;
        this.changeButtonStateToLoading$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.addWeatherLocation), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(action => action.modus === 'manual'), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.concatLatestFrom)(() => this.store.select((0,_weather_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAllWeatherConditions)())), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(([action, conditions]) => !conditions?.find(cond => (0,_shared_location_util__WEBPACK_IMPORTED_MODULE_4__.equalLocations)(cond.location, action.location))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => (0,_zipcode_location_entry_location_entry_state_zip_entry_action__WEBPACK_IMPORTED_MODULE_3__.changeButtonState)('loading'))));
        this.loadWeatherConditionForZipcode$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.addWeatherLocation), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.concatLatestFrom)(() => this.store.select((0,_weather_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAllWeatherConditions)())), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(([action, conditions]) => !conditions?.find(cond => (0,_shared_location_util__WEBPACK_IMPORTED_MODULE_4__.equalLocations)(cond.location, action.location))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([action,]) => this.weatherService.fetchCurrentConditionsForLocation(action.location).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((condition) => {
            let actions = [(0,_weather_action__WEBPACK_IMPORTED_MODULE_0__.setCurrentConditionsForLocation)(action.location, condition)];
            if (action.modus === 'manual') {
                actions.push((0,_zipcode_location_entry_location_entry_state_zip_entry_action__WEBPACK_IMPORTED_MODULE_3__.finishedLoadingWeatherConditions)());
            }
            return actions;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => [(0,_zipcode_location_entry_location_entry_state_zip_entry_action__WEBPACK_IMPORTED_MODULE_3__.changeButtonState)('initial')])))));
        this.refreshWeatherForAllLocations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.refreshAllWeatherLocations), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.store.select((0,_weather_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAllWeatherLocations)()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(locations => locations.values()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(location => this.weatherService.fetchCurrentConditionsForLocation(location).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(conditions => (0,_weather_action__WEBPACK_IMPORTED_MODULE_0__.setCurrentConditionsForLocation)(location, conditions))))))));
    }
};
WeatherEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions },
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_1__.WeatherService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store }
];
WeatherEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injectable)()
], WeatherEffects);



/***/ }),

/***/ 8379:
/*!************************************************************!*\
  !*** ./src/app/main-page/weather-state/weather.reducer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "weatherFeatureKey": () => (/* binding */ weatherFeatureKey),
/* harmony export */   "weatherReducer": () => (/* binding */ weatherReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _weather_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.action */ 3948);
/* harmony import */ var _shared_location_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/location-util */ 7501);



const weatherFeatureKey = 'weather';
const initialState = {
    localConditions: []
};
const weatherReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.addWeatherLocation, (state, action) => ({
    localConditions: state.localConditions.find(cond => ((0,_shared_location_util__WEBPACK_IMPORTED_MODULE_1__.equalLocations)(cond.location, action.location)))
        ? state.localConditions
        : state.localConditions.concat({
            location: action.location,
            condition: undefined
        })
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.setCurrentConditionsForLocation, (state, action) => ({
    ...state,
    localConditions: setConditionForLocationWithZipcode(action.location, action.conditions, state.localConditions)
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_weather_action__WEBPACK_IMPORTED_MODULE_0__.removeWeatherLocation, (state, action) => ({
    localConditions: state.localConditions.filter(cond => !(0,_shared_location_util__WEBPACK_IMPORTED_MODULE_1__.equalLocations)(cond.location, action.location))
})));
const setConditionForLocationWithZipcode = (location, condition, state) => {
    const localConditions = JSON.parse(JSON.stringify(state));
    localConditions.map(cond => {
        if ((0,_shared_location_util__WEBPACK_IMPORTED_MODULE_1__.equalLocations)(cond.location, location)) {
            cond.condition = condition;
        }
    });
    return localConditions;
};


/***/ }),

/***/ 5810:
/*!**************************************************************!*\
  !*** ./src/app/main-page/weather-state/weather.selectors.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAllWeatherConditions": () => (/* binding */ selectAllWeatherConditions),
/* harmony export */   "selectAllWeatherLocations": () => (/* binding */ selectAllWeatherLocations)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _weather_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.reducer */ 8379);


const selectWeatherState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_weather_reducer__WEBPACK_IMPORTED_MODULE_0__.weatherFeatureKey);
const selectAllWeatherConditions = () => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectWeatherState, (state) => state.localConditions
    .filter(cond => cond.condition));
const selectAllWeatherLocations = () => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectWeatherState, (state) => state.localConditions
    .map(localCondition => localCondition.location));


/***/ }),

/***/ 6650:
/*!*******************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/country-input/country-input.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryInputComponent": () => (/* binding */ CountryInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _country_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-input.component.html?ngResource */ 6585);
/* harmony import */ var _country_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-input.component.scss?ngResource */ 7672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _assets_countries_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/countries.json */ 9447);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8977);







let CountryInputComponent = class CountryInputComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectCountryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.countries = _assets_countries_json__WEBPACK_IMPORTED_MODULE_2__;
        this.searchValue = '';
        this.filteredCountries = [];
        this.countrySelected = false;
        this.focusOut = () => {
            if (!this.countrySelected) {
                this.selectCountryEvent.emit(null);
            }
        };
        this.selectCountry = (country) => {
            this.form.controls['country'].setValue(country.name);
            this.countrySelected = true;
            this.selectCountryEvent.emit(country);
        };
        this.getText = (name) => {
            const searchIndex = name.toLowerCase().indexOf(this.searchValue);
            return name.slice(searchIndex, searchIndex + this.searchValue.length);
        };
        this.getPrefix = (name) => name.slice(0, name.toLowerCase().indexOf(this.searchValue));
        this.getSuffix = (name) => name.slice(name.toLowerCase().indexOf(this.searchValue) + this.searchValue.length);
    }
    ngOnInit() {
        this.form = this.fb.group({
            country: ['']
        });
        this.form.get('country').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(searchValue => {
            this.searchValue = searchValue.toLowerCase();
            this.countrySelected = false;
            this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(this.searchValue));
        });
    }
};
CountryInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
CountryInputComponent.propDecorators = {
    selectCountryEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CountryInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-country-input',
        template: _country_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_country_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountryInputComponent);



/***/ }),

/***/ 2102:
/*!*******************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry-state/zip-entry.action.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeButtonState": () => (/* binding */ changeButtonState),
/* harmony export */   "finishedLoadingWeatherConditions": () => (/* binding */ finishedLoadingWeatherConditions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const changeButtonState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Zip Entry] Change the buttonState', (buttonState) => ({ buttonState }));
const finishedLoadingWeatherConditions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Zip Entry] Finished loading weather conditions');


/***/ }),

/***/ 8604:
/*!********************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry-state/zip-entry.effects.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipEntryEffects": () => (/* binding */ ZipEntryEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _zip_entry_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-entry.action */ 2102);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);





let ZipEntryEffects = class ZipEntryEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.resetButtonStateAfterFinishLoading$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_zip_entry_action__WEBPACK_IMPORTED_MODULE_0__.finishedLoadingWeatherConditions), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_zip_entry_action__WEBPACK_IMPORTED_MODULE_0__.changeButtonState)('initial'))));
    }
};
ZipEntryEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions }
];
ZipEntryEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ZipEntryEffects);



/***/ }),

/***/ 5223:
/*!********************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry-state/zip-entry.reducer.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "zipEntryFeatureKey": () => (/* binding */ zipEntryFeatureKey),
/* harmony export */   "zipEntryReducer": () => (/* binding */ zipEntryReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _zip_entry_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-entry.action */ 2102);


const zipEntryFeatureKey = 'zipEntry';
const initialState = {
    addLocationButtonState: 'initial'
};
const zipEntryReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_zip_entry_action__WEBPACK_IMPORTED_MODULE_0__.changeButtonState, (_, action) => ({
    addLocationButtonState: action.buttonState
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_zip_entry_action__WEBPACK_IMPORTED_MODULE_0__.finishedLoadingWeatherConditions, (_) => ({
    addLocationButtonState: 'done'
})));


/***/ }),

/***/ 8581:
/*!*********************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry-state/zip-entry.selector.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectButtonState": () => (/* binding */ selectButtonState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _zip_entry_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zip-entry.reducer */ 5223);


const selectZipEntryState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_zip_entry_reducer__WEBPACK_IMPORTED_MODULE_0__.zipEntryFeatureKey);
const selectButtonState = () => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectZipEntryState, (state) => state.addLocationButtonState);


/***/ }),

/***/ 960:
/*!******************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationEntryComponent": () => (/* binding */ LocationEntryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _location_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-entry.component.html?ngResource */ 5356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../location.service */ 8056);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _location_entry_state_zip_entry_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-entry-state/zip-entry.selector */ 8581);






let LocationEntryComponent = class LocationEntryComponent {
    constructor(service, store) {
        this.service = service;
        this.store = store;
        this.addLocation = (zipcode) => this.service.addLocation({ zipcode, countryCode: this.selectedCountry?.code });
        this.determineTemplateRef = (buttonState) => {
            if (buttonState === 'done') {
                return this.successButtonTemplate;
            }
            else if (buttonState === 'loading') {
                return this.loadingButtonTemplate;
            }
            else {
                return this.initialButtonTemplate;
            }
        };
        this.isButtonDisabled = (buttonState) => buttonState !== 'initial';
        this.selectCountry = (country) => this.selectedCountry = country;
    }
    ngOnInit() {
        this.addLocationButtonState$ = this.store.select((0,_location_entry_state_zip_entry_selector__WEBPACK_IMPORTED_MODULE_2__.selectButtonState)());
    }
};
LocationEntryComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store }
];
LocationEntryComponent.propDecorators = {
    initialButtonTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['initial', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef },] }],
    loadingButtonTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['loading', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef },] }],
    successButtonTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['success', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef },] }]
};
LocationEntryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-location-entry',
        template: _location_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], LocationEntryComponent);



/***/ }),

/***/ 7501:
/*!*****************************************!*\
  !*** ./src/app/shared/location-util.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equalLocations": () => (/* binding */ equalLocations)
/* harmony export */ });
const equalLocations = (loc1, loc2) => loc1.zipcode === loc2.zipcode && loc1.countryCode === loc2.countryCode;


/***/ }),

/***/ 4634:
/*!*********************************************************************!*\
  !*** ./src/app/shared/template-button/template-button.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateButtonComponent": () => (/* binding */ TemplateButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _template_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-button.component.html?ngResource */ 3567);
/* harmony import */ var _template_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-button.component.scss?ngResource */ 5158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let TemplateButtonComponent = class TemplateButtonComponent {
    constructor() {
        this.disabled = false;
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter;
    }
    triggerAction() {
        this.buttonClicked.emit();
    }
};
TemplateButtonComponent.propDecorators = {
    currentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TemplateButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-template-button',
        template: _template_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_template_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TemplateButtonComponent);



/***/ }),

/***/ 7187:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.currentConditions = [];
        this.fetchCurrentConditionsForLocation = (location) => this.http.get(`${WeatherService.URL}/weather?zip=${location.zipcode}${location.countryCode ? ',' + location.countryCode : ''}&units=imperial&APPID=${WeatherService.APPID}`);
    }
    removeCurrentConditions(zipcode) {
        for (let i in this.currentConditions) {
            if (this.currentConditions[i].zip == zipcode)
                this.currentConditions.splice(+i, 1);
        }
    }
    getCurrentConditions() {
        return this.currentConditions;
    }
    getForecast(location) {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(`${WeatherService.URL}/forecast/daily?zip=${location.zipcode}${location.countryCode ? ',' + location.countryCode : ''}&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
    }
    getWeatherIcon(id) {
        if (id >= 200 && id <= 232)
            return WeatherService.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return WeatherService.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return WeatherService.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return WeatherService.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return WeatherService.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return WeatherService.ICON_URL + "art_fog.png";
        else
            return WeatherService.ICON_URL + "art_clear.png";
    }
};
WeatherService.URL = 'http://api.openweathermap.org/data/2.5';
WeatherService.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
WeatherService.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
WeatherService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], WeatherService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 9975:
/*!*********************************************************************************!*\
  !*** ./src/app/forecast/forecasts-list/forecasts-list.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4937:
/*!******************************************************************************************!*\
  !*** ./src/app/main-page/current-conditions/current-conditions.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: #2196F3;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUVBLDJDQUEyQztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBR0UsMkJBQTJCO0FBQzdCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY3VycmVudC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */";

/***/ }),

/***/ 7672:
/*!********************************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/country-input/country-input.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".overlap {\n  position: absolute;\n  width: 85%;\n  z-index: 1;\n}\n\n.list-group-item:hover {\n  background-color: #ecf0f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6ImNvdW50cnktaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogMTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjQ7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 5158:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/template-button/template-button.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 1606:
/*!**********************************************************************************!*\
  !*** ./src/app/forecast/forecasts-list/forecasts-list.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 8552:
/*!*******************************************************************************************!*\
  !*** ./src/app/main-page/current-conditions/current-conditions.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div class=\"well\">\n    <h4>Activate automatic refresh</h4>\n    <label class=\"switch\">\n      <input\n        type=\"checkbox\"\n        [(ngModel)]=\"autoRefresh\"\n        [ngModelOptions]=\"{standalone: true}\"/>\n      <span class=\"slider round\"></span>\n    </label>\n\n  </div>\n  <div *ngFor=\"let weatherCondition of currentWeatherConditions$ | async\" class=\"well flex\" (click)=\"showForecast(weatherCondition.location)\">\n    <div>\n      <h3>{{weatherCondition.condition.name}} ({{weatherCondition.location.zipcode}})</h3>\n      <h4>Current conditions: {{weatherCondition.condition.weather[0].main}}</h4>\n      <h4>Temperatures today:</h4>\n      <p>\n        Current {{weatherCondition.condition.main.temp | number:'.0-0'}}\n        - Max {{weatherCondition.condition.main.temp_max | number:'.0-0'}}\n        - Min {{weatherCondition.condition.main.temp_min | number:'.0-0'}}\n      </p>\n      <p>\n        <a [routerLink]=\"['/forecast', weatherCondition.location.zipcode]\" >Show 5-day forecast for {{weatherCondition.condition.name}}</a>\n      </p>\n    </div>\n    <div>\n      <span class=\"close\" (click)=\"locationService.removeLocation(weatherCondition.location)\">&times;</span>\n      <img [src]=\"weatherService.getWeatherIcon(weatherCondition.condition.weather[0].id)\">\n    </div>\n </div>\n</div>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n\n  <app-location-entry> </app-location-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 6585:
/*!********************************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/country-input/country-input.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <input formControlName=\"country\" type=\"text\" placeholder=\"Country\" class=\"form-control\" (focusout)=\"focusOut()\">\n  <div *ngIf=\"searchValue.length > 0 && !countrySelected\" class=\"list-group overlap\">\n    <ng-container *ngFor=\"let c of filteredCountries\" >\n      <div (click)=\"selectCountry(c)\" class=\"list-group-item\">\n        <span>{{getPrefix(c.name)}}</span><b><span>{{getText(c.name)}}</span></b><span>{{getSuffix(c.name)}}</span>\n      </div>\n    </ng-container>\n  </div>\n</form>\n\n";

/***/ }),

/***/ 5356:
/*!*******************************************************************************************!*\
  !*** ./src/app/main-page/zipcode/location-entry/location-entry.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"well\">\n  <h2>Enter a location:</h2>\n  <div class=\"row\">\n    <div class=\"col-lg-2 col-md-2\">\n      <app-country-input (selectCountryEvent)=\"selectCountry($event)\"></app-country-input>\n    </div>\n    <div class=\"col-lg-2 col-md-2\">\n      <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n    </div>\n  </div>\n\n  <br>\n  <ng-container *ngIf=\"addLocationButtonState$ | async as buttonState\">\n    <app-template-button\n      [currentTemplate]=\"determineTemplateRef(buttonState)\"\n      [disabled]=\"isButtonDisabled(buttonState)\"\n      (buttonClicked)=\"addLocation(zipcode.value)\">\n    </app-template-button>\n  </ng-container>\n</div>\n\n<ng-template #initial >\n  <div class=\"btn btn-primary\">\n    Add location\n  </div>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"btn btn-warning\">\n    Adding...\n  </div>\n</ng-template>\n\n<ng-template #success>\n  <div class=\"btn btn-success\">\n    <i class=\"bi bi-check\"></i> Done\n  </div>\n</ng-template>\n";

/***/ }),

/***/ 3567:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/template-button/template-button.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<button (click)=\"triggerAction()\" [disabled]=\"disabled\" style=\"border: none\">\n  <ng-container *ngTemplateOutlet=\"currentTemplate\">\n  </ng-container>\n</button>\n";

/***/ }),

/***/ 9447:
/*!***********************************!*\
  !*** ./src/assets/countries.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"Åland Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\\"Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\\"S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\\"S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suri","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map