import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  currentReport = new Report;
acceptSale(currentSale: Sale) {
  console.log("this is the sale to be inputted into report: " + JSON.stringify(currentSale));
}
  constructor() { }
}
