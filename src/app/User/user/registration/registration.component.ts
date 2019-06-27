import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userservice:UserService,private toaster:ToastrService) { 
   
    
  }

  ngOnInit() {
    this.rest();
  }


 rest(){
   this.userservice.usermodel={
     FullName:'',
     UserName:'',
     Password:'',
     Email:''
   }
 }
 asd=false;
 save(){
   this.userservice.RegisterUser().subscribe(
    (res: any) => {
    if (res.succeeded)
    {
      this.toaster.success('Username is Successfully Added','Registration Success.');

    }

     else {
      res.errors.forEach(element => {
        switch (element.code) {
          case 'DuplicateUserName':
            this.toaster.error('Username is already taken','Registration failed.');
            
            break;

          default:
          this.toaster.error(element.description,'Registration failed.');
            break;
        }
      });
     }
     },errr=>{
       console.log(errr)
     }
   )
   
 }

}
