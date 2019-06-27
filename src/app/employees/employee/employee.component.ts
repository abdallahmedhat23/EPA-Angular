import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { error } from 'util';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {
//THE ijection of the service to my component and its name is just employeeservice
  constructor( private employeeservice:EmployeeService, private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
  //added it here to excuate the function when this component is fully loaded in browser
  this.restForm();

 }

  //rest Form its the function name
  //froom its the parameter which its type NgForm <= that is type imported in the top from => '@angular/forms';
  restForm(froom? :NgForm){
    if(froom !=null)

      froom.reset();
       this.employeeservice.selectedEmployee={
        EmployeeID:null,
        EmpCode:'',
       FirstName:'',
        LastName:'',
        Office:''
      
    }
    
  }
  showspanner=false;

  onSubmit(from :NgForm){
   if(from.value.EmployeeID==null){
    this.insertNewRecord(from);
   }
    else {
    this.updateRecord(from)
    }
  }
  insertNewRecord(from:NgForm){
    this.showspanner=true;
    this.employeeservice.postEmploye(from.value).subscribe(res=>{
      this.restForm(from);
      this.toastr.success('successfully done!', 'Employee Register');
      this.employeeservice.getallemployee();
    },(error)=>{},()=>{
      this.showspanner=false;

    });
    
  }
  updateRecord(from:NgForm){
    this.showspanner=true;
    this.employeeservice.updatecurrentEmployee(from.value).subscribe(res=>{
      this.restForm(from);
      this.toastr.success('successfully updated!', 'Employee update');
      this.showspanner=false;
      this.employeeservice.getallemployee();
    })

  }
}
