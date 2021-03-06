import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private service:CrudService) { }
  EmployeeData : any;

  ngOnInit(): void {
    this.EmployeeData=this.service.GetEmployee().subscribe((data)=>this.EmployeeData=data)
  }

}
