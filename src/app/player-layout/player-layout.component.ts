import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerData } from './player-info.model';
@Injectable(

)
@Component({
  selector: 'app-player-layout',
  templateUrl: './player-layout.component.html',
  styleUrls: ['./player-layout.component.css']
})
export class PlayerLayoutComponent implements OnInit{
  playerInfo: PlayerData | undefined;
  ngOnInit(): void {
    console.log("I am here");
    this.getPlayerInfo();
    this.showUserInfo();
  }
  constructor(private http: HttpClient)
  {

  }
  getPlayerInfo(){
    return this.http.get<PlayerData>('https://eliteprospects-89f23-default-rtdb.firebaseio.com/Tyler%20Howcroft.json')
  }
  showUserInfo(){
    this.getPlayerInfo().subscribe(data =>{
      console.log(data)
      console.log("I am here too")
      this.playerInfo = data;
    })
  }

}
