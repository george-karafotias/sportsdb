import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Input() events: any[];

  atLeastOneResult: boolean = false;

  constructor() { }

  ngOnInit() {
    this.atLeastOneResult = this.atLeastOneEventHappened();
  }

  private atLeastOneEventHappened(): boolean {
    if (this.events) {
      for (let i = 0; i < this.events.length; i++) {
        if (this.eventHappened(this.events[i])) {
          return true;
        }
      }
    }
    return false;
  }

  private eventHappened(event: any): boolean {
    let homeScore: string = '';
    let awayScore: string = '';
    if (event.intHomeScore) homeScore = event.intHomeScore.toString();
    if (event.intAwayScore) awayScore = event.intAwayScore.toString();
    return (homeScore && homeScore.length > 0 && awayScore && awayScore.length > 0);
  }

}
