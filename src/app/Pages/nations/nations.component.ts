import { Component } from '@angular/core';
import { SideBar } from 'src/app/side-bar/SidebarModel';
import { mock_list } from 'src/app/side-bar/mock_list';
@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.css']
})
export class NationsComponent {
  sidebar: SideBar [] = [];
  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.sidebar.push(item);
    }
  }
}
