import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchStorageService } from './search-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private searchStorageService: SearchStorageService) { }

  goToRoute(route: string) {
    this.searchStorageService.reset();
    this.router.navigate(['/' + route]);
  }
}
