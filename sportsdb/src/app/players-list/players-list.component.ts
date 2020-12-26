import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  @Input() players: any[];

  constructor() { }

  ngOnInit() {
  }

}
