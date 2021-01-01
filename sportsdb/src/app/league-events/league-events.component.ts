import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueEventsService } from './league-events.service';

@Component({
  selector: 'app-league-events',
  templateUrl: './league-events.component.html',
  styleUrls: ['./league-events.component.css']
})
export class LeagueEventsComponent implements OnInit {

  id: string;
  name: string;
  events: any;
  errorMessage: string;
  callInProgress: boolean = false;

  constructor(private route: ActivatedRoute, private leagueEventsService: LeagueEventsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');

    this.getLeagueEvents();
  }

  getLeagueEvents() {
    this.errorMessage = '';
    this.callInProgress = true;

    this.leagueEventsService.getLeagueEvents(this.id)
      .subscribe({
        next: data => {
          this.events = data.events;
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
