import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-stadium',
  templateUrl: './team-stadium.component.html',
  styleUrls: ['./team-stadium.component.css']
})
export class TeamStadiumComponent implements OnInit {

  @Input() team: any;

  constructor() { }

  ngOnInit() {
  }

}
