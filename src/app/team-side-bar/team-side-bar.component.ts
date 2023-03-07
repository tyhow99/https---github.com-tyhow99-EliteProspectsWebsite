import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-team-side-bar',
  templateUrl: './team-side-bar.component.html',
  styleUrls: ['./team-side-bar.component.css']
})
export class TeamSideBarComponent implements  OnInit{
@Input() team1: string;
@Input() team2: string;
  constructor(){
    this.team1="teamless";
    this.team2="teamless";
  }
  ngOnInit(): void {
    
  }

}
