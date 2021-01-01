import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchStorageService {

  lastPlayerSearchText: string = '';
  lastPlayerResults: any[];
  lastTeamSearchText: string = '';
  lastTeamResults: any[];
  lastLeagueSearchText: string = '';
  lastLeagueResults: any[];

  constructor() { }

  reset() {
    this.lastLeagueSearchText = '';
    this.lastPlayerResults = undefined;
    this.lastTeamSearchText = '';
    this.lastTeamResults = undefined;
    this.lastLeagueSearchText = '';
    this.lastLeagueResults = undefined;
  }
}
