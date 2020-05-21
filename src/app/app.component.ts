import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() edited = true;

  constructor( private location: Location, 
    private employeeService: EmployeeService, 
    private productService: ProductService,
    private router: Router) { }
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleEdited(v:boolean) {
    this.edited = v;
  }

  checkDisplay() {
      this.edited = false;
  }

  ngOnInit(): void {
    this.router.navigate(['']);
    console.log("for checks::app " + this.location.path());
    this.checkDisplay();
    console.log("for rechecks::app " + this.location.path());
  }
  title = 'angular-lemonade-stand';
}
