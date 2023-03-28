import { Component } from '@angular/core';
import { SideBar } from 'src/app/side-bar/SidebarModel';
import { mock_list } from 'src/app/side-bar/mock_list';
import { GridModel } from 'src/app/grid1/grid1Model';
import { transferlist } from 'src/app/grid1/Transferlist';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  transferGrid: GridModel [] = [];
  constructor(){
    for(var item2 of transferlist)
    {
      console.log(item2);
      this.transferGrid.push(item2);
    }

  }
}
