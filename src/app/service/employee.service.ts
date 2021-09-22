import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getOneEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/getOne/${id}`);
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/getAll`);
  }

}
