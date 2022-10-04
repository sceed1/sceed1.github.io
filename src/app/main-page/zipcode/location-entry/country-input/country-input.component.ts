import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Country} from '../../../../data/model';
import Countries from '../../../../../assets/countries.json';
import {FormBuilder} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Output() selectCountryEvent = new EventEmitter<Country>();

  public countries: Country[] = Countries;
  public form;
  public searchValue = '';
  filteredCountries: Country[] = [];
  countrySelected = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      country: ['']
    })

    this.form.get('country').valueChanges.pipe(
      distinctUntilChanged(),
    ).subscribe(searchValue => {
      this.searchValue = searchValue.toLowerCase();
      this.countrySelected = false;
      this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(this.searchValue))
    });
  }

  focusOut = () => {
    if (!this.countrySelected) {
      this.selectCountryEvent.emit(null);
    }
  }

  selectCountry = (country: Country) => {
    this.form.controls['country'].setValue(country.name);
    this.countrySelected = true;
    this.selectCountryEvent.emit(country);
  }

  getText = (name: string) => {
    const searchIndex = name.toLowerCase().indexOf(this.searchValue);
    return name.slice(searchIndex, searchIndex + this.searchValue.length);
  }

  getPrefix = (name: string) => name.slice(0, name.toLowerCase().indexOf(this.searchValue));


  getSuffix = (name: string) => name.slice(name.toLowerCase().indexOf(this.searchValue) + this.searchValue.length);

}
