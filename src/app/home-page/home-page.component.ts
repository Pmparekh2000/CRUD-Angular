import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(): void {
    this.employeeService.getAllEmployees()
    .subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
        console.log(this.employees);
      },
      err => {
        console.log(err);
      }
    );
  }

  private getOneEmployee(id: number): void {
    this.router.navigate(['edit', id]);
    this.employeeService.getOneEmployee(id)
    .subscribe(
      employee => {
        this.employee = employee;
        console.log(this.employee);
      },
      err => {
        console.log(err);
      }
    );
  }

}
