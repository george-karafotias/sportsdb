import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from './league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  id: string;
  league: any;
  errorMessage: string;
  callInProgress: boolean = false;

  constructor(private route: ActivatedRoute, private leagueService: LeagueService) { }

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
          this.callInProgress = false;
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

}
