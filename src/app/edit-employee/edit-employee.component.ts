import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  employee: Employee;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getEmployee(id);
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.employeeForm.controls;
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

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
  }

}
