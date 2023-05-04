export interface AuthResponse {
    idToken:string;
    email:string;
    refreshToken:String;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}