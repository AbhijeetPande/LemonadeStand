import { Component, OnInit  } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.run();
  }

}
