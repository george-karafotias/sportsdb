import { Component, OnInit } from '@angular/core';
import { SearchStorageService } from '../services/search-storage.service';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] = undefined;
  searchText: string = '';
  errorMessage: string = '';
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private teamsService: TeamsService, private searchStorageService: SearchStorageService) { }

  ngOnInit() {
    this.searchText = this.searchStorageService.lastTeamSearchText;
    this.teams = this.searchStorageService.lastTeamResults;
  }

  getTeams(teamName: string) {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;
    this.searchStorageService.lastTeamSearchText = teamName;
    this.searchText = this.searchStorageService.lastTeamSearchText;

    this.teamsService.getTeams(teamName)
      .subscribe({
        next: data => {
          this.teams = data.teams;
          this.callInProgress = false;
          this.callCompleted = true;
          this.searchStorageService.lastTeamResults = this.teams;
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }
}
