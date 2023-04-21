import { HttpClient } from "@angular/common/http";
import { PlayerInfo } from "./player-layout/player-info.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Injectable} from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class AppService{
    private baseUrl:string = "https://eliteprospects-89f23-default-rtdb.firebaseio.com/";
    private playerEndPoint = "Players.json";
    // private baseUrl:string = "https://tutorial-db3ee-default-rtdb.firebaseio.com/";
    // private productsEndPoint = "Products.json";
    constructor(private http:HttpClient ){

    }

    getPlayers(){
        return this.http.get<PlayerInfo []>(this.baseUrl + this.playerEndPoint);       
    }
    getPlayer(){

    }
    
}