import { Component, OnInit } from '@angular/core';
import { TransferPlayersModel } from './TransferPlayerModel';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AddPlayerService } from './add-player-service';
import { TeamPlayerModel } from './TeamPlayerModel';
@Component({
  selector: 'app-add-player-two',
  templateUrl: './add-player-two.component.html',
  styleUrls: ['./add-player-two.component.css']
})
export class AddPlayerTwoComponent implements OnInit{
  playerInfo: TransferPlayersModel | undefined;
  constructor(private  ps: AddPlayerService){

  }
  ngOnInit(): void {
  }
  getPlayerInfo(){
     
  }
  addPlayer(player:TransferPlayersModel){
    console.log("You clicked add player");
    console.log(player);
    this.ps.addPlayer(player);
  }
  addPenguinsDefenseman(player: TeamPlayerModel)
  {
    this.ps.addPlayer(player);
  }
}
