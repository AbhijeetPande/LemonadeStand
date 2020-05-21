import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from  '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ReportComponent } from './components/report/report.component';
import { EditComponent } from './components/edit/edit.component';
import { SalesComponent } from './components/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    EmployeesComponent,
    ReportComponent,
    EditComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
