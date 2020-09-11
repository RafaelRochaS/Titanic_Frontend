import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {

  siblingsRequiredControl = new FormControl('', Validators.required);
  parentsRequiredControl = new FormControl('', Validators.required);

  constructor(private router: Router, private dataService: DataService) { }

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
      return;
    } else {
      this.dataService.setChildren(this.parentsRequiredControl.value);
      this.dataService.setSibs(this.siblingsRequiredControl.value);
      this.router.navigate(['/results']);
    }
  }
}
