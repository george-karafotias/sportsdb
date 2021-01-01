import { Component, OnInit } from '@angular/core';
import { SearchStorageService } from '../services/search-storage.service';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = undefined;
  searchText: string = '';
  errorMessage: string = '';
  callInProgress: boolean = false;
  callCompleted: boolean = false;

  constructor(private playersService: PlayersService, private searchStorageService: SearchStorageService) { }

  ngOnInit() {
    this.searchText = this.searchStorageService.lastPlayerSearchText;
    this.players = this.searchStorageService.lastPlayerResults;
  }

  getPlayers(playerName: string) {
    this.errorMessage = '';
    this.callInProgress = true;
    this.callCompleted = false;
    this.searchStorageService.lastPlayerSearchText = playerName;
    this.searchText = this.searchStorageService.lastPlayerSearchText;

    this.playersService.getPlayers(playerName)
      .subscribe({
        next: data => {
          this.players = data.player;
          this.callInProgress = false;
          this.callCompleted = true;
          this.searchStorageService.lastPlayerResults = this.players;
        },
        error: error => {
          this.callInProgress = false;
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      })
  }

}
