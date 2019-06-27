import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './shared/employee.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  
  //thats array of the employeeService class the injection procces of the service
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeService: EmployeeService) { 
    
  }

  ngOnInit() {
  }

  }
