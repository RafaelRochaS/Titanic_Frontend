import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  githubUrl = 'https://github.com/RafaelRochaS/Titanic_Frontend';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatePersonalDetails(): void {
    this.router.navigate(['/personal-details']);
  }

  openGithub(): void {
    window.open(this.githubUrl);
  }
}
