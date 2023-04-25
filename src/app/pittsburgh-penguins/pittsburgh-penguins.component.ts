import { Component, OnInit } from '@angular/core';
import { TeamPlayerModel } from '../add-player-two/TeamPlayerModel';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-pittsburgh-penguins',
  templateUrl: './pittsburgh-penguins.component.html',
  styleUrls: ['./pittsburgh-penguins.component.css']
})
export class PittsburghPenguinsComponent implements OnInit{
  playerInfo: TeamPlayerModel | undefined;
  ngOnInit(): void {
    
  }
  constructor(private db: AngularFireDatabase){
    
  }
  getPenguinsPlayers()
  {
    return this.db.object<TeamPlayerModel>('https://eliteprospects-89f23-default-rtdb.firebaseio.com/Pittsburgh-Penguins.json')   
  }
  showPenguinsPlayer(){
  
  }
}
