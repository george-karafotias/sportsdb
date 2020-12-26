import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  id: string;
  player: any;
  errorMessage: string;
  callInProgress: boolean = false;

  constructor(private route: ActivatedRoute, private playersService: PlayerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPlayer(this.id);
  }

  getPlayer(playerId: string) {
    this.errorMessage = '';
    this.callInProgress = true;

    this.playersService.getPlayer(playerId)
      .subscribe({
        next: data => {
          this.player = data.players[0];
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
