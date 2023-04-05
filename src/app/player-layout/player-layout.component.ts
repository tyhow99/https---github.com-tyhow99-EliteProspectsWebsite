import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerInfo } from './player-info.model';
@Injectable(

)
@Component({
  selector: 'app-player-layout',
  templateUrl: './player-layout.component.html',
  styleUrls: ['./player-layout.component.css']
})
export class PlayerLayoutComponent implements OnInit
{
  playerInfo: PlayerInfo | undefined;
  ngOnInit(): void {
    console.log("I am here");
    this.getPlayerInfo();
    this.showUserInfo();
  }
  constructor(private http: HttpClient)
  {

  }
  getPlayerInfo(){
    return this.http.get<PlayerInfo>('https://eliteprospects-89f23-default-rtdb.firebaseio.com/Tyler-Howcroft.json')
  }
  showUserInfo(){
    this.getPlayerInfo().subscribe(data =>{
      console.log(data)
      this.playerInfo = data;
    })
  }

}
