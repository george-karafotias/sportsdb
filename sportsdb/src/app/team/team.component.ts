import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  id: string;
  team: any;
  teamLastEvents: any[];
  teamNextEvents: any[];
  errorMessage: string;
  callInProgress: boolean = false;

  constructor(private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTeam(this.id);
  }

  getTeam(teamId: string) {
    this.errorMessage = '';
    this.callInProgress = true;

    this.teamService.getTeam(teamId)
      .subscribe({
        next: data => {
          this.team = data.teams[0];
          this.callInProgress = false;
          this.getTeamLastEvents(teamId);
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

  getTeamLastEvents(teamId: string) {
    this.teamService.getTeamLastEvents(teamId)
      .subscribe({
        next: data => {
          this.teamLastEvents = data.results;
          this.getTeamNextEvents(teamId);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
  }

  getTeamNextEvents(teamId: string) {
    this.teamService.getTeamNextEvents(teamId)
      .subscribe({
        next: data => {
          this.teamNextEvents = data.events;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
  }

}
