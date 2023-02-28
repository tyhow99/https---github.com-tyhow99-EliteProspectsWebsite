export class GridModel  
{  
    Date: string; 
    Player: string; 
    Team1: string; 
    Team2: string; 

 
    constructor( Date: string,  Team1: string, Player: string, Team2: string){ 
        this.Date = Date; 
        this.Player = Player; 
        this.Team1 = Team1; 
        this.Team2 = Team2; 
    } 
} 