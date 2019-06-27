import { Injectable } from '@angular/core';
import {EmployeeModel} from './employee-model';
import{HttpClient}from '@angular/common/http';

// operators all come from `rxjs/operators`

@Injectable({
  providedIn: 'root'
 
})
export class EmployeeService {
 
  //its a proparty of type emmployee model that callled under each prop in html and use it to rest form
  //ده الاوبجكت اللي تحت كل عنصر من العناصر وبيخزن القيمه هنا
  selectedEmployee: EmployeeModel;
  //for get all employe 
  listEmpm: EmployeeModel[];


  constructor(private http: HttpClient) { }

  readonly uri = "http://localhost:53345/api/Employees"
  postEmploye(selectedEmployee: EmployeeModel) {
    return this.http.post(this.uri + '/PostEmployee', selectedEmployee);
  }

  getallemployee(){
    return this.http.get(this.uri+'/GetEmployees').toPromise().then(res=>this.listEmpm=res as EmployeeModel[]);
  }

  updatecurrentEmployee(selectedEmployee: EmployeeModel){
    return this.http.put(this.uri + '/PutEmployee?EmployeeID='+selectedEmployee.EmployeeID, selectedEmployee);
  }
  deleteemployee(id:number)
  {
    return this.http.delete(this.uri + '/DeleteEmployee?id='+id);
  }
}
