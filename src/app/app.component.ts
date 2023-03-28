import { Component } from '@angular/core';
import { mock_list } from './side-bar/mock_list';
import { SideBar } from './side-bar/SidebarModel';
import { NHL_List } from 'src/app/team-side-bar/NHLTeamList';
import { TeamSideBar } from 'src/app/team-side-bar/teamSideBarModel';
import { AHL_List } from 'src/app/team-side-bar/AHLTeamList';
import { ECHL_List } from 'src/app/team-side-bar/ECHLTeamList';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EliteProspectsWebsite';
  sidebar: SideBar [] = [];
  nhlSideBar: TeamSideBar [] = [];
  ahlSideBar: TeamSideBar [] = [];
  echlSideBar: TeamSideBar [] = [];
 constructor(){
  for(var item of mock_list){
    console.log(item);
    this.sidebar.push(item);
  }
  for(var item2 of NHL_List){
    console.log(item2);
    this.nhlSideBar.push(item2);
 }
 for(var item3 of AHL_List){
  console.log(item3);
  this.ahlSideBar.push(item3);
 }
for(var item4 of ECHL_List){
  console.log(item4);
  this.echlSideBar.push(item4);
 }
}
}
