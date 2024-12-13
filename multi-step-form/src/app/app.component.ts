import { Component, OnInit } from '@angular/core';
import { StarterPageComponent } from './starter-page/starter-page.component';

import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, StarterPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public showOnlyStarterPage!: boolean;

  constructor(readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.router.url === '') {
        this.showOnlyStarterPage = true;
      } else {
        this.showOnlyStarterPage = false;
      }
    });
  }
}
