import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
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
import { TesterComponent } from './tester/tester.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'SignInPage',
    component: SignInPageComponent
  },
  {
    path: 'TicketsPage',
    component: TicketsComponent
  },
  {
    path: 'AgentPortal',
    component: AgentPortalComponent
  },
  {
    path: 'AwardsPage',
    component: AwardsComponent
  },
  {
    path: 'BookmarksPage',
    component: BookmarksComponent
  },
  {
    path: 'ComparePlayers',
    component: ComparePlayersComponent
  },
  {
    path: 'ContactEP',
    component: ContactEPComponent
  },
  {
    path: 'DraftCenter',
    component: DraftCenterComponent
  },
  {
    path: 'EPRinkside',
    component: EPRinksideComponent
  },
  {
    path: 'EPShop',
    component: EPShopComponent
  },
  {
    path: 'FreeAgents',
    component: FreeAgentsComponent
  },
  {
    path: 'HelpPage',
    component: HelpComponent
  },
  {
    path: 'LeaguesPage',
    component: LeaguesComponent
  },
  {
    path: 'MyRoster',
    component: MyRosterComponent
  },
  {
    path: 'NationsPage',
    component: NationsComponent
  },
  {
    path: 'PlayerTrackerPage',
    component: PlayerTrackerComponent
  },
  {
    path: 'PremiumPage',
    component: TicketsComponent
  },
  {
    path: 'RankingPortalPage',
    component: RankingPortalComponent
  },
  {
    path: 'StatsPage',
    component: StatsComponent
  },
  {
    path: 'TeamPage',
    component: TeamsComponent
  },
  {
    path: 'TestPage',
    component: TesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
