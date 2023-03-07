import { Component } from '@angular/core';
import { mock_list } from './side-bar/mock_list';
import { SideBar } from './side-bar/SidebarModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EliteProspectsWebsite';
  sidebar: SideBar [] = [];
 constructor(){
  for(var item of mock_list){
    console.log(item);
    this.sidebar.push(item);
  }
 }
}
