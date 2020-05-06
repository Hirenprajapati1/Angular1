import { CrudService } from './../../crud.service';
import { Employee } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee : Employee= new Employee("","","","",0,0,"",0);
  message:any;
  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }

  public AddEmpNow(){
    let resp=this.service.AddEmployee(this.employee);
    resp.subscribe((data)=>this.message=data);
      }  

}
