import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private readonly TEAMS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
  private readonly TEAM_LAST_EVENTS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=';
  private readonly TEAM_NEXT_EVENTS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=';

  constructor(private http: HttpClient) { }

  getTeam(id: string): Observable<any> {
    return this.http.get<any>(this.TEAMS_URL + id);
  }

  getTeamLastEvents(id: string): Observable<any> {
    return this.http.get<any>(this.TEAM_LAST_EVENTS_URL + id);
  }

  getTeamNextEvents(id: string): Observable<any> {
    return this.http.get<any>(this.TEAM_NEXT_EVENTS_URL + id);
  }

}
