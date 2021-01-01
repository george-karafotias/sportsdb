import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueResultsService } from './league-results.service';

@Component({
  selector: 'app-league-results',
  templateUrl: './league-results.component.html',
  styleUrls: ['./league-results.component.css']
})
export class LeagueResultsComponent implements OnInit {

  id: string;
  name: string;
  events: any;
  errorMessage: string;
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private route: ActivatedRoute, private leagueResultsService: LeagueResultsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');

    this.getLeagueResults();
  }

  getLeagueResults() {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;

    this.leagueResultsService.getLeagueResults(this.id)
      .subscribe({
        next: data => {
          this.events = data.events;
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
