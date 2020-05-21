import { Product } from "./product"
import { Employee } from './employee';

export class Sale {
    public ItemCheckout?: Product; //stores the name of the product sold and the amount of the product sold
    public EmployeeTag?: Employee; //stores the employee that made the purchase
    public DateAndTime?: Date; //stores the date and time of the purchase
}
