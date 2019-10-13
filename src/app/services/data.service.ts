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
    new Product(1, "Tecno C8", "Android phone", "Latest Tecno phone", 21000, "assets/images/Tecno-c8.jpg"),
    new Product(2, "Samsong S9", "Android phone", "Afordable Samsong phone", 2000, "assets/images/samsong.png"),
    new Product(3, "LG Plasma", "Smart TV", "Latest Tecno phone", 3000, "/assets/images/lg.jpg"),
    new Product(4, "HP Pringer", "Printers", "Black and white copy", 25000, "/assets/images/hp-printer.png"),
    new Product(5, "Samsong TV", "Smart TV", "Latest Samsong product", 2000, "/assets/images/smart-tv.jpg"),
    new Product(6, "HP Laptop ", "Computers", "Intel i7 processor", 8000, "/assets/images/hp-laptop.jpg"),
    new Product(7, "Dell PC", "Computers", "Latest Tecno phone", 2000, "/assets/images/dell.jpg"),
    new Product(8, "Lenovo PC", "Computers", "Best super computer", 4000, "/assets/images/lenovo.jpg"),
    new Product(9, "Camon C8", "Android phone", "Latest Tecno phone", 3000, "/assets/images/camon-c8.jpg"),
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
