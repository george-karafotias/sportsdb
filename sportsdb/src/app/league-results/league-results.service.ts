import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeagueResultsService {

    private readonly LEAGUE_RESULTS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=';

    constructor(private http: HttpClient) { }

    getLeagueResults(id: string): Observable<any> {
        return this.http.get<any>(this.LEAGUE_RESULTS_URL + id);
    }
}
