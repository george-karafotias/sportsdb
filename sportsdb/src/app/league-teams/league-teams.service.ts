import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeagueTeamsService {

    private readonly LEAGUE_TEAMS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=';

    constructor(private http: HttpClient) { }

    getLeagueTeams(id: string): Observable<any> {
        return this.http.get<any>(this.LEAGUE_TEAMS_URL + id);
    }
}
