import { Component } from '@angular/core';
import { SideBar } from 'src/app/side-bar/SidebarModel';
import { mock_list } from 'src/app/side-bar/mock_list';
import { GridModel } from 'src/app/grid1/grid1Model';
import { transferlist } from 'src/app/grid1/Transferlist';
import { NHL_List } from 'src/app/team-side-bar/NHLTeamList';
import { TeamSideBar } from 'src/app/team-side-bar/teamSideBarModel';
import { AHL_List } from 'src/app/team-side-bar/AHLTeamList';
import { ECHL_List } from 'src/app/team-side-bar/ECHLTeamList';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  sidebar: SideBar [] = [];
  transferGrid: GridModel [] = [];
  tSideBar: TeamSideBar [] = [];
  tSideBar2: TeamSideBar [] = [];
  tSideBar3: TeamSideBar [] = [];
  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.sidebar.push(item);
    }
    for(var item2 of transferlist)
    {
      console.log(item2);
      this.transferGrid.push(item2);
    }
    for(var item3 of NHL_List)
    {
      console.log(item3);
      this.tSideBar.push(item3);
    }
    for(var item4 of AHL_List)
    {
      console.log(item4);
      this.tSideBar2.push(item4);
    }
    for(var item5 of ECHL_List)
    {
      console.log(item5);
      this.tSideBar3.push(item5);
    }
  }
}
