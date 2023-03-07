import { Component } from '@angular/core';
import { SideBar } from 'src/app/side-bar/SidebarModel';
import { mock_list } from 'src/app/side-bar/mock_list';
import { GridModel } from 'src/app/grid1/grid1Model';
import { transferlist } from 'src/app/grid1/Transferlist';
import { NHL_List } from 'src/app/team-side-bar/NHLTeamList';
import { TeamSideBar } from 'src/app/team-side-bar/teamSideBarModel';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  sidebar: SideBar [] = [];
  transferGrid: GridModel [] = [];
  tSideBar: TeamSideBar [] = [];
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
  }
}
