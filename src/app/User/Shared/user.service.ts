import { Injectable } from '@angular/core';
;
import { UserModel } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
usermodel:UserModel;

uri="http://localhost:58233/api/ApplicationUser"

RegisterUser(){
 return this.http.post(this.uri+"/Register",this.usermodel);

}
login(){
  return this.http.post(this.uri+"/Login",this.usermodel)
}

loader=false;

url="http://localhost:58233/api/UserProfile"
getuserdata(){
 // var tokenheader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
 return this.http.get(this.url+"/GetUserProfile")//,{ headers:tokenheader }
}
}
