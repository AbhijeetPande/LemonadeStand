import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'assets/data/employees.json';  // URL to web api
  p: Employee[];
  constructor(private http:HttpClient) { }
    run() {
      this.http.get(this.employeesUrl).subscribe(data => {
        console.log("this is data: " + JSON.stringify(data));
        var itemListResponse = <Employee[]>JSON.parse(JSON.stringify(data));
        this.p = JSON.parse(JSON.stringify(data));
        console.log(itemListResponse[0].name);
        console.log(this.p[1].name);

      })
  }

}