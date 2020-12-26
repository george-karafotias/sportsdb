import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private readonly PLAYERS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=';

    constructor(private http: HttpClient) { }

    getPlayer(id: string): Observable<any> {
        return this.http.get<any>(this.PLAYERS_URL + id);
    }
}
