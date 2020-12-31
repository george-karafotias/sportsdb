import { Component, OnInit } from '@angular/core';
import { SearchStorageService } from '../services/search-storage.service';
import { LeaguesService } from './leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: any[] = undefined;
  searchText: string = '';
  autoCompleteMode: boolean = true;
  errorMessage: string = '';
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private leaguesService: LeaguesService, private searchStorageService: SearchStorageService) { }

  ngOnInit() {
    this.searchText = this.searchStorageService.searchText;
    this.getLeagues();
  }

  getLeagues() {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;
    this.searchStorageService.searchText = this.searchText;

    this.leaguesService.getLeagues()
      .subscribe({
        next: data => {
          this.leagues = data.leagues;
          this.callInProgress = false;
          this.callCompleted = true;
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

  filter(str: string) {
    this.searchText = str;
    this.searchStorageService.searchText = this.searchText;
  }

}
