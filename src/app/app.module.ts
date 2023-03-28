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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
