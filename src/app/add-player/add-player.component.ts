import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../player-layout/player-info.model';
import { AddPlayerService } from './add-player-service';

@Component({
  selector: 'fm-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  constructor(private ps: AddPlayerService){}
  ngOnInit(): void{

  }
  addPlayer(player:PlayerInfo){
    console.log("You clicked this shit");
    console.log(player);
    this.ps.addPlayer(player);
  }
}
