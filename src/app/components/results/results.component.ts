import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  survived: boolean;
  resultsText: string;
  resultsSubText: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getResults();
    this.setResultsTexts();
    this.dataService.printAll();
  }

  getResults(): void {
    this.survived = this.dataService.getSurvived();
    console.log(this.survived);
  }

  setResultsTexts(): void {
    if (!this.survived) {
      this.resultsText = 'Unfortunately, you didn\'t make it. The Machine Learning dictated that, under the conditions set, you would probably not have survived the Titanic crash.';
      this.resultsSubText = 'Maybe changing some of the input values might change your fate...';
    } else {
      this.resultsText = 'Congratz, you made it! The Machine Learning dictated that, under the conditions set, you would have survived the Titanic crash! ';
      this.resultsSubText = 'Enjoy your life, or maybe try to change the input values to see if your fate could be different.';
    }
  }

  back(): void {
    window.history.back();
  }

  tryAgain(): void {
    this.dataService.resetValues();
    this.router.navigate(['/landing-page']);
  }
}
