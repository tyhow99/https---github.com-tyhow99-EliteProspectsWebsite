import { ReturnStatement } from "@angular/compiler";
import { PlayerInfo } from "../player-layout/player-info.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
export class AddPlayerService {
    constructor(private db: AngularFireDatabase){

    }
    getPlayers(){
        return this.db.list<PlayerInfo>("Tyler-Howcroft").valueChanges();
    }
    addPlayer(player: PlayerInfo){
        this.db.list<PlayerInfo>("Tyler-Howcroft").push(player);
    }
}
