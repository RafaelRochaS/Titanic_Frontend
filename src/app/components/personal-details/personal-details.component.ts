import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

interface SelectValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  genders: SelectValues[] = [
    { value: 'male', viewValue: 'Male'},
    { value: 'female', viewValue: 'Female'}
  ];

  ticketClass: SelectValues[] = [
    { value: '1', viewValue: 'First Class'},
    { value: '2', viewValue: 'Second Class'},
    { value: '3', viewValue: 'Third Class'}
  ];

  portOfEmbarkation: SelectValues[] = [
    { value: 'C', viewValue: 'Cherbourg, France' },
    { value: 'Q', viewValue: 'Queenstown, Ireland' },
    { value: 'S', viewValue: 'Southampton, England' },
  ];

  nameRequiredControl = new FormControl('', Validators.required);
  ageRequiredControl = new FormControl('', Validators.required);
  ticketRequiredControl = new FormControl('', Validators.required);
  genderRequiredControl = new FormControl('', Validators.required);
  portRequiredControl = new FormControl('', Validators.required);

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  back(): void {
    window.history.back();
  }

  inputValidation(): void {

    if (this.nameRequiredControl.value === '') {
      this.nameRequiredControl.setErrors({required: true, emitEvent: true});
      this.nameRequiredControl.updateValueAndValidity();
      this.nameRequiredControl.markAllAsTouched();
    }

    if (this.ageRequiredControl.value === '') {
      this.ageRequiredControl.setErrors({required: true, emitEvent: true});
      this.ageRequiredControl.updateValueAndValidity();
      this.ageRequiredControl.markAllAsTouched();
    }

    if (this.genderRequiredControl.value === '') {
      this.genderRequiredControl.setErrors({required: true, emitEvent: true});
      this.genderRequiredControl.updateValueAndValidity();
      this.genderRequiredControl.markAllAsTouched();
    }

    if (this.ticketRequiredControl.value === '') {
      this.ticketRequiredControl.setErrors({required: true, emitEvent: true});
      this.ticketRequiredControl.updateValueAndValidity();
      this.ticketRequiredControl.markAllAsTouched();
    }

    if (this.portRequiredControl.value === '') {
      this.portRequiredControl.setErrors({required: true, emitEvent: true});
      this.portRequiredControl.updateValueAndValidity();
      this.portRequiredControl.markAllAsTouched();
    }

    if (this.nameRequiredControl.value === '' ||
        this.ageRequiredControl.value === '' ||
        this.genderRequiredControl.value === '' ||
        this.ticketRequiredControl.value === '' ||
        this.portRequiredControl.value === '') {
          return;
    } else {
      this.dataService.setName(this.nameRequiredControl.value);
      this.dataService.setAge(this.ageRequiredControl.value);
      this.dataService.setGender(this.genderRequiredControl.value);
      this.dataService.setTicketClass(this.ticketRequiredControl.value);
      this.dataService.setPort(this.portRequiredControl.value);
      this.router.navigate(['/family-details']);
    }
  }
}
