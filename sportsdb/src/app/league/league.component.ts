import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueEventsService } from '../league-events/league-events.service';
import { LeagueResultsService } from '../league-results/league-results.service';
import { LeagueTeamsService } from '../league-teams/league-teams.service';
import { LeagueService } from './league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  id: string;
  league: any;
  teams: any[];
  events: any[];
  results: any[];
  errorMessage: string;
  callInProgress: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private leagueTeamsService: LeagueTeamsService,
    private leagueEventsService: LeagueEventsService,
    private leagueResultsService: LeagueResultsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeague(this.id);
  }

  getLeague(leagueId: string) {
    this.errorMessage = '';
    this.callInProgress = true;

    this.leagueService.getLeague(leagueId)
      .subscribe({
        next: data => {
          this.league = data.leagues[0];
          this.getLeagueTeams();
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

  getLeagueTeams() {
    this.leagueTeamsService.getLeagueTeams(this.id)
      .subscribe({
        next: data => {
          this.teams = data.teams;
          this.getLeagueEvents();
        },
        error: error => {
          this.callInProgress = false;
        }
      })
  }

  getLeagueEvents() {
    this.leagueEventsService.getLeagueEvents(this.id)
      .subscribe({
        next: data => {
          this.events = data.events;
          this.getLeagueResults();
        },
        error: error => {
          this.callInProgress = false;
        }
      })
  }

  getLeagueResults() {
    this.leagueResultsService.getLeagueResults(this.id)
      .subscribe({
        next: data => {
          this.results = data.events;
          this.callInProgress = false;
        },
        error: error => {
          this.callInProgress = false;
        }
      })
  }

}
