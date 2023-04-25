import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
import { Grid1Component } from './grid1/grid1.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TicketsComponent } from './Pages/tickets/tickets.component';
import { AwardsComponent } from './Pages/awards/awards.component';
import { EPShopComponent } from './Pages/epshop/epshop.component';
import { EPRinksideComponent } from './Pages/eprinkside/eprinkside.component';
import { StatsComponent } from './Pages/stats/stats.component';
import { TeamsComponent } from './Pages/teams/teams.component';
import { LeaguesComponent } from './Pages/leagues/leagues.component';
import { NationsComponent } from './Pages/nations/nations.component';
import { DraftCenterComponent } from './Pages/draft-center/draft-center.component';
import { PremiumComponent } from './Pages/premium/premium.component';
import { HelpComponent } from './Pages/help/help.component';
import { BookmarksComponent } from './Pages/bookmarks/bookmarks.component';
import { PlayerTrackerComponent } from './Pages/player-tracker/player-tracker.component';
import { ComparePlayersComponent } from './Pages/compare-players/compare-players.component';
import { AgentPortalComponent } from './Pages/agent-portal/agent-portal.component';
import { RankingPortalComponent } from './Pages/ranking-portal/ranking-portal.component';
import { MyRosterComponent } from './Pages/my-roster/my-roster.component';
import { ContactEPComponent } from './Pages/contact-ep/contact-ep.component';
import { FreeAgentsComponent } from './Pages/free-agents/free-agents.component';
import { TeamSideBarComponent } from './team-side-bar/team-side-bar.component';
import { TesterComponent } from './tester/tester.component';
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import {HttpClientModule} from '@angular/common/http';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerLayoutComponent } from './player-layout/player-layout.component';
import { TeamLayoutComponent } from './team-layout/team-layout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
//import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AddPlayerTwoComponent } from './add-player-two/add-player-two.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddPlayerService } from './add-player-two/add-player-service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SignInPageComponent,
    Grid1Component,
    SideBarComponent,
    TicketsComponent,
    AwardsComponent,
    EPShopComponent,
    EPRinksideComponent,
    StatsComponent,
    TeamsComponent,
    LeaguesComponent,
    NationsComponent,
    DraftCenterComponent,
    PremiumComponent,
    HelpComponent,
    BookmarksComponent,
    PlayerTrackerComponent,
    ComparePlayersComponent,
    AgentPortalComponent,
    RankingPortalComponent,
    MyRosterComponent,
    ContactEPComponent,
    FreeAgentsComponent,
    TeamSideBarComponent,
    TesterComponent,
    LeagueTeamsComponent,
    BasicTableComponent,
    FooterComponent,
    PlayerLayoutComponent,
    TeamLayoutComponent,
    AddPlayerComponent,
    AddPlayerTwoComponent
    //\AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AddPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
