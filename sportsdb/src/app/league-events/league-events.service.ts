import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeagueEventsService {

    private readonly LEAGUE_EVENTS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=';

    constructor(private http: HttpClient) { }

    getLeagueEvents(id: string): Observable<any> {
        return this.http.get<any>(this.LEAGUE_EVENTS_URL + id);
    }
}
