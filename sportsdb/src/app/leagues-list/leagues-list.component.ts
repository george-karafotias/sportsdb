import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues-list',
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.css']
})
export class LeaguesListComponent implements OnInit {

  @Input() leagues: any[];
  @Input() searchText: string;

  constructor() { }

  ngOnInit() {
  }

}
