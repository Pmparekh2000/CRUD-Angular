import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  employee: Employee;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getEmployee(id);
  }

  private getEmployee(id: string): void {
    // tslint:disable-next-line: radix
    this.employeeService.getOneEmployee(parseInt(id))
    .subscribe((employee: Employee) => {
      this.employee = employee;
      console.log(employee);
    },
    err => {
      console.log(err);
    });
  }

}
