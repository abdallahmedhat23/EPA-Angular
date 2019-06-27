import { Component, OnInit } from '@angular/core';
import{EmployeeService} from'../shared/employee.service'
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../shared/employee-model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  config: any;
 

  constructor(private empservice: EmployeeService, private toastr: ToastrService) {
   

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems:empservice.listEmpm
    };
   }
   pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.empservice.getallemployee();
  }

  populateform(a: EmployeeModel) {
    this.empservice.selectedEmployee = Object.assign({}, a);

  }

  DeleteEmp(empId: number) {
    if (confirm("are you shore to delate this record")){
      this.empservice.deleteemployee(empId).subscribe(res => {
        this.toastr.warning('successfully delated!', 'Employee Delate');
      
        this.empservice.getallemployee();
     
      });
  

    }
  
  }
}
