import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  country;
  covidFormGroup: FormGroup;
  covid;
  countries;

  constructor(private covidService: CovidService, private fb: FormBuilder, private countriesService: CountriesService) {
    this.covidFormGroup = fb.group({
      localIp: true,
      country: '',
    });

    this.covidFormGroup.get('localIp').valueChanges.subscribe((local) => {
      if (!local && !this.countries) {
        this.countriesService.getCountries().subscribe((countries) => {
          this.countries = countries;
        });
      }
      if (local) {
        this.covidFormGroup.controls.country.reset();
      }
    });

    this.covidFormGroup.get('country').valueChanges.subscribe((country) => {
      this.covidService.getCovidInfo(country ? country.name : this.country.location.country.name).subscribe((covid) => {
        this.covid = covid;
      });
    });
  }

  ngOnInit(): void {
    this.covidService.getCountry().subscribe((country) => {
      this.country = country;
      this.covidService.getCovidInfo(country.location.country.name).subscribe((covid) => {
        this.covid = covid;
      });
    });
  }
}
