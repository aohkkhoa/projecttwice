import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  userr : String;
  constructor(private employeeservice : EmployeeService) {

    this.userr=sessionStorage.getItem('username')
   }

  ngOnInit(): void {
    this.getemployee();
  }
private getemployee(){
 
  this.employeeservice.getemployeelist().subscribe(data => {
    this.employees = data;
  })
}
}