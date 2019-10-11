import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {OrderService} from './order.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {

  private orders: OrderService[] = [];

  constructor(private dataSource : DataService) { }

  // this method returns orders
  getOrders(): OrderService[] {
    return this.orders;
  }

  // this method save orders
  saveOrder(order: OrderService): Observable<OrderService>{
    return this.dataSource.saveOrder(order);
  }

}
