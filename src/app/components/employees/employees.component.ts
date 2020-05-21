import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
//this allows access to print parameters from variable todo, such as todo.title
@Input() completeList: Employee[];
selectedEmployee: Employee;
  constructor(private employeeService: EmployeeService) { }
  printNewSelection() {
    if (!this.selectedEmployee) {

    }
    else {
      console.log("this is the selection currently: " + this.selectedEmployee.name);
    }
  }

  onSubmit() {
    if (!this.selectedEmployee) {
      console.log("invalid data");
    }
    else {
      this.employeeService.chosenEmployee = JSON.parse(JSON.stringify(this.selectedEmployee));
    }
  }
  
  ngOnInit(): void {
    this.completeList = this.employeeService.getEmployeeData();
  }

}
