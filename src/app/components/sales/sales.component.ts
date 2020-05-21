import { Component, OnInit, Input  } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  currentSale = new Sale;

  constructor(private reportService: ReportService,
    private productService: ProductService,
    private employeeService: EmployeeService) {   }
  ngOnInit(): void {
  }
  onSubmit() { 
    //save the product info
    console.log("The Chosen Product!!" + this.productService.chosenProduct);
    this.currentSale.ItemCheckout = JSON.parse(JSON.stringify(this.productService.chosenProduct));
    //save the employee info
    this.currentSale.EmployeeTag = JSON.parse(JSON.stringify(this.employeeService.chosenEmployee));
    //date and time
    this.currentSale.DateAndTime =  new Date();
    //submit this to reportService
    this.reportService.acceptSale(this.currentSale);
  }
}

