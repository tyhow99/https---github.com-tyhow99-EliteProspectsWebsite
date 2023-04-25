import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'auth',
    templateUrl: "auth.component.html"
})

export class AuthComponent {
    constructor(private authService: AuthService){

    }
    public onSubmit(data: NgForm){
        console.log("Button Clicked")
        console.log(data)
        this.authService.signup(data.value.email,data.value.password).subscribe(data =>{
            //console.log(data);
        });
    }
}