import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    baseUrl: string = "https://identitytoolkit.googleapis.com/vl/accounts" 
    signUpEndPoint: string = "signUp";
    signInEndPoint: string = "signInWithPassword"
    private constructor(private http: HttpClient){

    }
    public signup(email: string, password: string){
        const requestBody = {
            "email" :email,
            "password":password,
            "returnSecureToken": true,
        }
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndPoint + '?' + 
        'keys=' +environment.firebase.apiKey,requestBody)
    }
    public login(email:string, password:string)
    {
        const requestBody = {
            "email" :email,
            "password":password,
            "returnSecureToken": true,
        }
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndPoint + '?' + 
        'keys=' +environment.firebase.apiKey,requestBody)
    }
}