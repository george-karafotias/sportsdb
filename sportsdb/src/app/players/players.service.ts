import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly PLAYERS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=';

  constructor(private http: HttpClient) { }

  getPlayers(name: string): Observable<any> {
    return this.http.get<any>(this.PLAYERS_URL + name);
  }
}
