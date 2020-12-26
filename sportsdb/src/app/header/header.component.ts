import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpened: boolean = false;
  currentUrl: string = '';

  constructor(private router: Router, private navigationService: NavigationService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

  goToRoute(route: string) {
    if (this.menuOpened) {
      this.menuOpened = false;
    }
    this.navigationService.goToRoute(route);
  }

  menuButtonClicked() {
    this.menuOpened = !this.menuOpened;
  }

}
