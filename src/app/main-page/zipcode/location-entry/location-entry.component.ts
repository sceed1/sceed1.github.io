import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LocationService} from "../../../location.service";
import {Store} from '@ngrx/store';
import {selectButtonState} from './location-entry-state/zip-entry.selector';
import {Country} from '../../../data/model';
import {ButtonState} from './location-entry-state/zip-entry.reducer';

@Component({
  selector: 'app-location-entry',
  templateUrl: './location-entry.component.html'
})
export class LocationEntryComponent implements OnInit {

  public addLocationButtonState$

  public selectedCountry: Country

  @ViewChild('initial', { read: TemplateRef }) initialButtonTemplate:TemplateRef<any>;
  @ViewChild('loading', { read: TemplateRef }) loadingButtonTemplate:TemplateRef<any>;
  @ViewChild('done', { read: TemplateRef }) doneButtonTemplate:TemplateRef<any>;

  constructor(private service : LocationService, private store: Store) { }

  ngOnInit() {
    this.addLocationButtonState$ = this.store.select(selectButtonState());
  }

  addLocation = (zipcode : string) => this.service.addLocation({zipcode, countryCode: this.selectedCountry?.code});

  determineTemplateRef = (buttonState: ButtonState) => {
    if (buttonState === 'done') { return this.doneButtonTemplate; }
    else if (buttonState === 'loading') { return this.loadingButtonTemplate; }
    else { return this.initialButtonTemplate; }
  }

  isButtonDisabled = (buttonState: ButtonState) => buttonState !== 'initial';

  selectCountry = (country: Country) => this.selectedCountry = country;

}
