import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../User/Shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit() {

    this.UserData();
  }
  LogOut(){

    localStorage.removeItem("token");
    this.router.navigate(['/user/login'])


  }
   asd ;
   StatusOfUser=localStorage.getItem("token");

 UserData(){
  this.userservice.getuserdata().subscribe(a=>{
      this.asd=a;
    
  })
}
arowvalue=false;
togleArrow(){
this.arowvalue=!this.arowvalue;
}
}
