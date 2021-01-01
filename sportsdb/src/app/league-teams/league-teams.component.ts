import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueTeamsService } from './league-teams.service';

@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.css']
})
export class LeagueTeamsComponent implements OnInit {

  id: string;
  name: string;
  teams: any;
  errorMessage: string;
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private route: ActivatedRoute, private leagueTeamsService: LeagueTeamsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');

    this.getLeagueTeams();
  }

  getLeagueTeams() {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;

    this.leagueTeamsService.getLeagueTeams(this.id)
      .subscribe({
        next: data => {
          this.teams = data.teams;
          this.callInProgress = false;
          this.callCompleted = true;
        },
        error: error => {
          this.callInProgress = false;
          this.callCompleted = true;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

}
