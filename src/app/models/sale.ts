import { Product } from "./product"
import { Employee } from './employee';

export class Sale {
    ItemCheckout: (Product | number)[]; //stores the name of the product sold and the amount of the product sold
    EmployeeTag: Employee; //stores the employee that made the purchase
    DateAndTime: Date; //stores the date and time of the purchase
}
