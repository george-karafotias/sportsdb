import { Component, OnInit } from '@angular/core';
import { LeaguesService } from './leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: any[] = undefined;
  errorMessage: string = '';
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues() {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;

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
}
