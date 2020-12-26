import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private readonly TEAMS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';

  constructor(private http: HttpClient) { }

  getTeams(name: string): Observable<any> {
    return this.http.get<any>(this.TEAMS_URL + name);
  }
}
