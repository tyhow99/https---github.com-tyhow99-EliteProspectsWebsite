import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { NgForm } from "@angular/forms";
import { AuthResponse } from "./authResponse.model";
import { Observable } from "rxjs";

@Component({
    selector: 'auth',
    templateUrl: "auth.component.html"
})

export class AuthComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    constructor(private authService: AuthService){

    }
    public onSubmit(data: NgForm){
        console.log("Button Clicked " + this.buttonClicked)
        console.log(data)

        if(this.buttonClicked == 'SignUp'){
            this.authObservable = this.authService.signup(data.value.email,data.value.password);
        }
        if(this.buttonClicked == 'Login'){
            this.authObservable = this.authService.signup(data.value.email,data.value.password);
        }
    
       
       this.authObservable.subscribe(
            (data:AuthResponse) =>{
            console.log(data);
        },
       error => {
            console.log(error.error);
        }
        );
        data.resetForm();
    }
}