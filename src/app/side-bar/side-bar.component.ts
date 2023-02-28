import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
 @Input() name: string;
 @Input() name2: string;
 constructor(){
  this.name = "Nameless";
  this.name2 = "Nameless";
 }
  ngOnInit(): void {
    
  }
}
