import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  survived = false;
  resultsText: string;
  resultsSubText: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.setResultsTexts();
    this.dataService.printAll();
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

}
