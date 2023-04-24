import { Injectable } from "@angular/core";
import { TransferPlayersModel } from "./TransferPlayerModel";
import { AngularFireDatabase } from "@angular/fire/compat/database";
@Injectable( {providedIn: 'root'})


export class AddPlayerService {
    constructor(public db: AngularFireDatabase){

    }
    getPlayers(){
        return this.db.object<TransferPlayersModel>("Transfer-Players").valueChanges();
    }
    addPlayer(player: TransferPlayersModel){
        this.db.list<TransferPlayersModel>("Transfer-Players").push(player);
    }
}
