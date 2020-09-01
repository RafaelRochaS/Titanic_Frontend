import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  header: string;
  subheader: string;

  constructor(private routesService: RoutesService,
              private router: Router) { }

  ngDoCheck(): void {
    const routes = this.routesService.getRoutes();
    routes.forEach(route => {
      if (this.router.url === route.url) {
        this.header = route.header;
        this.subheader = route.subheader;
      }
    });
  }
}
