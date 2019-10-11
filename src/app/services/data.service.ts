import { Injectable } from '@angular/core';
import {Product} from '../model/Product';
import {from, Observable} from 'rxjs';
import {OrderService} from './order.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // this is an array of products
  private products : Product[] = [
    new Product(1, "Tecno C8", "Android phone", "Latest Tecno phone", 21000, ""),
    new Product(2, "Samsong S9", "Android phone", "Afordable Samsong phone", 2000, ""),
    new Product(3, "LG Plasma", "Smart TV", "Latest Tecno phone", 3000, ""),
    new Product(4, "HP Pringer", "Printers", "Black and white copy", 25000, ""),
    new Product(5, "Samsong TV", "Smart TV", "Latest Samsong product", 2000, ""),
    new Product(6, "HP Laptop ", "Computers", "Intel i7 processor", 8000, ""),
    new Product(7, "Dell PC", "Computers", "Latest Tecno phone", 2000, ""),
    new Product(8, "Lenovo PC", "Computers", "Best super computer", 4000, ""),
    new Product(9, "Tecno C8", "Android phone", "Latest Tecno phone", 3000, ""),
  ];

// this method returns all products
  getProducts() : Observable<Product[]>{
    return from([this.products]);
  }


  saveOrder( order: OrderService) : Observable<OrderService>{
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
