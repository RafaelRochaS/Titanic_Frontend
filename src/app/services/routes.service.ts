import { Injectable } from '@angular/core';
import { RouteModel } from '../models/route.model';

const ROUTES: RouteModel[] = [
  {
    url: '/landing-page',
    header: 'Titanic MLOps',
    subheader: 'A Machine Learning End-to-End Experiment'
  },
  {
    url: '/personal-details',
    header: 'Personal Info',
    subheader: 'Your Details on the Cruise'
  },
  {
    url: '/family-details',
    header: 'Family Info',
    subheader: 'Who Are Traveling With You'
  },
  {
    url: '/results',
    header: 'Results!',
    subheader: 'Did You Make It?'
  }
];

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  getRoutes(): RouteModel[] {
    return ROUTES;
  }
}
