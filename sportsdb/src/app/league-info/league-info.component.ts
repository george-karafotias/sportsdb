import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-info',
  templateUrl: './league-info.component.html',
  styleUrls: ['./league-info.component.css']
})
export class LeagueInfoComponent implements OnInit {

  @Input() league: any;

  constructor() { }

  ngOnInit() {
  }

}
