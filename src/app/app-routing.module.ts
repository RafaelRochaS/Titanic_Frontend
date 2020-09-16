import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'family-details', component: FamilyDetailsComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '/landing-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
