import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private readonly TEAMS_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';

  constructor(private http: HttpClient) { }

  getTeam(id: string): Observable<any> {
    return this.http.get<any>(this.TEAMS_URL + id);
  }
}
