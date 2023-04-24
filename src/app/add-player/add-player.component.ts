import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../player-layout/player-info.model';
import { AddPlayerService } from '../add-player-two/add-player-service';
import { TransferPlayersModel } from '../add-player-two/TransferPlayerModel';

@Component({
  selector: 'fm-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  constructor(){}
  ngOnInit(): void{

  }
 
}
