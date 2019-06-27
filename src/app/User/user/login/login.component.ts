import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserModel } from '../../Shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router) { }
 
  ngOnInit() {
    this.rest()
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/employees');
    }
   
  }

rest(){
  this.userservice.usermodel={
    UserName:'',
    Password:'',
    FullName:'',
    Email:''
  }
}
asd=false;
  onSubmit(){
    this.userservice.login().subscribe(
      (res: any) => {
   
        //التوكن اللي راجعلي هخزنه وبعد كدة اروح رايحي صفحة تلنيه ولتكن الهوم
        localStorage.setItem('token', res.token);

        this.router.navigateByUrl('/employees');
        
      },
      err => {
     
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
      
    
  }
}
