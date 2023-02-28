import { Component, Input, OnInit } from '@angular/core'; 
 
@Component({ 
  selector: 'app-grid', 
  templateUrl: './grid1.component.html', 
  styleUrls: ['./grid1.component.css'] 
}) 
export class Grid1Component implements OnInit{ 
@Input() Date: string; 
@Input() Player: string; 
@Input() Team1: string; 
@Input() Team2: string; 
  constructor(){ 
  this.Date = "No date"; 
  this.Player = "no name"; 
  this.Team1 = "no team"; 
  this.Team2 = "no team"; 
  } 
  ngOnInit(): void 
{ 

  } 
} 