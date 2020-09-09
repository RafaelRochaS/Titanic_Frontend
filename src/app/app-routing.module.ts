import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'family-details', component: FamilyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
