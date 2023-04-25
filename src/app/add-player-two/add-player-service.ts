import { Injectable } from "@angular/core";
import { TransferPlayersModel } from "./TransferPlayerModel";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import {TeamPlayerModel} from "./TeamPlayerModel";
@Injectable( {providedIn: 'root'})


export class AddPlayerService {
    constructor(public db: AngularFireDatabase){

    }
    getPlayers(){
        return this.db.object<TransferPlayersModel>("Pittsburgh-Penguins/Defenseman").valueChanges();
    }
    addPlayer(player: TransferPlayersModel){
        this.db.list<TransferPlayersModel>("Pittsburgh-Penguins/Defenseman").push(player);
    }
    getPenguinsDefenseman(){
        return this.db.object<TeamPlayerModel>("Pittsburgh-Penguins/Defenseman").valueChanges();
    }
    addPenguinsDefenseman(player: TeamPlayerModel){
        this.db.list<TeamPlayerModel>("Pittsburgh-Penguins/Defenseman").push(player);
    }
}
