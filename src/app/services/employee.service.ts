import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
//to write back to JSON file, https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private employeesUrl = 'assets/data/employees.json';  // URL to web api
  //variables

  EmployeeListResponse: Employee[];
  chosenEmployee: Employee;
  //constructor
  constructor(private http:HttpClient, private router: Router) {
    console.log("for checks: service:: " + this.router.url);
    this.fetchEmployeeData();
   }
  //populate variables  
  fetchEmployeeData(): Employee[] {
      this.http.get(this.employeesUrl).subscribe(data => {
        console.log("this is data: " + JSON.stringify(data));
        this.EmployeeListResponse = JSON.parse(JSON.stringify(data));
        var EmployeeListData: Employee[] = JSON.parse(JSON.stringify(data));
        console.log(this.EmployeeListResponse[1].name);
        this.storeEmployeeData(EmployeeListData);
      })
      return this.EmployeeListResponse;
  }
  //helper function
  storeEmployeeData(EmployeeListData: Employee[]): void {
    this.EmployeeListResponse = JSON.parse(JSON.stringify(EmployeeListData));
    console.log("storeEmployeeDatacheck " + this.EmployeeListResponse[1].name )
  }
  //return variables
  getEmployeeData(): Employee[] {
    console.log("getEmployeedata check: " + this.EmployeeListResponse);
    return this.EmployeeListResponse;
  }
  returnChosenEmployee(): Employee {
    return this.chosenEmployee;
  }

}