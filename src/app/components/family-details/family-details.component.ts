import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {

  siblingsRequiredControl = new FormControl('', Validators.required);
  parentsRequiredControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    window.history.back();
  }

  inputValidation(): void {

    if (this.parentsRequiredControl.value === '') {
      this.parentsRequiredControl.setErrors({required: true, emitEvent: true});
      this.parentsRequiredControl.updateValueAndValidity();
      this.parentsRequiredControl.markAllAsTouched();
    }

    if (this.siblingsRequiredControl.value === '') {
      this.siblingsRequiredControl.setErrors({required: true, emitEvent: true});
      this.siblingsRequiredControl.updateValueAndValidity();
      this.siblingsRequiredControl.markAllAsTouched();
    }

    if (this.parentsRequiredControl.value === '' ||
        this.siblingsRequiredControl.value === '') {
      console.log('Something is not filled');
      return;
    } else {
      console.log('All entries filled');
      // navigate to results page
    }
  }
}
