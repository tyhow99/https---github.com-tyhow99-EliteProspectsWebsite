import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';
@Injectable(

)
@Component({
    selector: "User-Info",
    templateUrl:"httpTest.html"
})

export class UserInfoComponent implements OnInit
{
    myInfo: UserInfo | undefined;
    ngOnInit(): void{
        console.log("Sending a get request to the server");
        this.getUserInfo();
        console.log("Registering user");
        this.showUserInfo();
    }
    constructor(private http: HttpClient)
    {

    }
    getUserInfo(){
        return this.http.get<UserInfo>('https://eliteprospects-89f23-default-rtdb.firebaseio.com/my-info.json');
    }
    showUserInfo(){
        this.getUserInfo().subscribe(data => {
            console.log(data);
            this.myInfo = data; 
        })
    }
}