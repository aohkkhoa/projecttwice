import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeservice.createempl(this.employee).subscribe(data => {
      console.log(data);
      this.gotoemployeelist();
      sessionStorage.setItem('username',this.employee.username.toString())
      let user = sessionStorage.getItem('username')
      console.log(user)
    },
      error => console.log(error));

  }
  gotoemployeelist() {
    this.router.navigate(['/haha']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee()
  }
  
}
