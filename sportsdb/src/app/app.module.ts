import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PleaseWaitComponent } from './please-wait/please-wait.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamComponent } from './team/team.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { ImageButtonComponent } from './image-button/image-button.component';
import { TeamStadiumComponent } from './team-stadium/team-stadium.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeaguesListComponent } from './leagues-list/leagues-list.component';
import { TableFilterPipe } from './filters/table-filter.pipe';
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { LeagueEventsComponent } from './league-events/league-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { LeagueResultsComponent } from './league-results/league-results.component';
import { NoResultsErrorComponent } from './no-results-error/no-results-error.component';
import { LeagueComponent } from './league/league.component';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { SocialMediaInfoComponent } from './social-media-info/social-media-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'league/:id', component: LeagueComponent },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'league-teams/:id/:name', component: LeagueTeamsComponent },
  { path: 'league-events/:id/:name', component: LeagueEventsComponent },
  { path: 'league-results/:id/:name', component: LeagueResultsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlayersComponent,
    FooterComponent,
    SearchBarComponent,
    PlayerComponent,
    ErrorMessageComponent,
    PleaseWaitComponent,
    PlayerInfoComponent,
    PlayersListComponent,
    TeamsComponent,
    TeamsListComponent,
    TeamComponent,
    TeamInfoComponent,
    ImageButtonComponent,
    TeamStadiumComponent,
    LeaguesComponent,
    LeaguesListComponent,
    TableFilterPipe,
    LeagueTeamsComponent,
    LeagueEventsComponent,
    EventsListComponent,
    LeagueResultsComponent,
    NoResultsErrorComponent,
    LeagueComponent,
    LeagueInfoComponent,
    SocialMediaInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
