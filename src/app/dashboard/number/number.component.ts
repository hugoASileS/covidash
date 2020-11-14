import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  numberFormGroup: FormGroup;
  types = [
    { value: 'trivia', title: 'Trivia' },
    { value: 'math', title: 'Matemáticas' },
    { value: 'date', title: 'Fecha' },
    { value: 'year', title: 'Año' },
  ];
  month = [
    { value: '01', title: 'Enero' },
    { value: '02', title: 'Febrero' },
    { value: '03', title: 'Marzo' },
    { value: '04', title: 'Abril' },
    { value: '05', title: 'Mayo' },
    { value: '06', title: 'Junio' },
    { value: '07', title: 'Julio' },
    { value: '08', title: 'Agosto' },
    { value: '09', title: 'Septiembre' },
    { value: '10', title: 'Octubre' },
    { value: '11', title: 'Noviembre' },
    { value: '12', title: 'Diciembre' },
  ];
  number$;

  constructor(private numbersService: NumbersService, private fb: FormBuilder) {
    this.numberFormGroup = fb.group({
      random: 'random',
      type: ['trivia', Validators.required],
      number: [],
      month: [],
      day: [],
    });

    this.numberFormGroup.get('type').valueChanges.subscribe((type) => {
      if (this.numberFormGroup.controls.random.value === 'custom') {
        switch (type) {
          case 'trivia':
          case 'math':
          case 'year':
            this.clearMonth();
            this.clearDay();
            this.addValidatorNumber();
            break;
          case 'date':
            this.addValidatorDay();
            this.addValidatorMonth();
            this.clearNumber();
            break;
        }
      }
    });
    this.numberFormGroup.get('random').valueChanges.subscribe((checked) => {
      if (checked === 'custom') {
        this.addValidatorNumber();
      } else {
        this.clearNumber();
        this.clearDay();
        this.clearMonth();
      }
    });
  }

  ngOnInit(): void {
    this.handleSubmitNumber();
  }

  handleSubmitNumber(): void {
    let url;
    if (this.numberFormGroup.valid) {
      if (this.numberFormGroup.get('random').value === 'random') {
        url = `random/${this.numberFormGroup.get('type').value}`;
      } else {
        switch (this.numberFormGroup.get('type').value) {
          case 'trivia':
          case 'math':
          case 'year':
            url = `${this.numberFormGroup.get('number').value}/${this.numberFormGroup.get('type').value}`;
            break;
          case 'date':
            url = `${this.numberFormGroup.get('month').value}/${this.numberFormGroup.get('day').value}/${
              this.numberFormGroup.get('type').value
            }`;
            break;
        }
      }
      this.number$ = this.numbersService.getNumber(url);
    } else {
      this.numberFormGroup.markAllAsTouched();
    }
  }

  clearNumber(): void {
    this.numberFormGroup.controls.number.clearValidators();
    this.numberFormGroup.controls.number.updateValueAndValidity();
  }
  clearMonth(): void {
    this.numberFormGroup.controls.month.clearValidators();
    this.numberFormGroup.controls.month.updateValueAndValidity();
  }
  clearDay(): void {
    this.numberFormGroup.controls.day.clearValidators();
    this.numberFormGroup.controls.day.updateValueAndValidity();
  }
  addValidatorNumber(): void {
    this.numberFormGroup.controls.number.clearValidators();
    this.numberFormGroup.controls.number.updateValueAndValidity();
  }
  addValidatorMonth(): void {
    this.numberFormGroup.controls.month.setValidators([Validators.required]);
    this.numberFormGroup.controls.month.updateValueAndValidity();
  }
  addValidatorDay(): void {
    this.numberFormGroup.controls.day.setValidators([Validators.required]);
    this.numberFormGroup.controls.day.updateValueAndValidity();
  }
}
