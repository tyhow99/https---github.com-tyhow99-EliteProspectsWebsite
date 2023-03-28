import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.css']
})
export class LeagueTeamsComponent implements OnInit
{
  @Input() column1: string;
  @Input() column2: string;
  @Input() column3: string;
  @Input() column4: string;
  @Input() column5: string;
    constructor(){
      this.column1="teamless";
      this.column2="teamless";
      this.column3="teamless";
      this.column4="teamless";
      this.column5="teamless";
    }
    ngOnInit(): void {
      
    }
}
