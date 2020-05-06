import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  AddEmployee(employee){
    return this.http.post(environment.EmpUrl + '/api/EmployeeMain/AddEmployee',employee,{responseType:'text' as 'json'});
  }
  GetEmployee(){
    // return this.http.get('http://localhost:64129/api/EmployeeMain/GetEmployees');
   return this.http.get(environment.EmpUrl + '/api/EmployeeMain/GetEmployees');
  }
  UpdateEmployee(){
    return this.http.get(environment.EmpUrl + 'api/EmployeeMain/UpdateEmployee');
  }
  DeleteEmployee(){
    return this.http.get(environment.EmpUrl + '/api/EmployeeMain/DeleteEmployee');
  }

}
