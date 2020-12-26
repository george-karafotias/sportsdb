import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchStorageService } from '../services/search-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpened: boolean = false;
  currentUrl: string = '';

  constructor(private router: Router, private searchStorageService: SearchStorageService) {
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
    this.searchStorageService.searchText = '';
    this.searchStorageService.searchResults = undefined;
    this.router.navigate(['/' + route]);
  }

  menuButtonClicked() {
    this.menuOpened = !this.menuOpened;
  }

}
