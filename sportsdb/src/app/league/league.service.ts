import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeagueService {

    private readonly LEAGUES_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';

    constructor(private http: HttpClient) { }

    getLeague(id: string): Observable<any> {
        return this.http.get<any>(this.LEAGUES_URL + id);
    }

}
