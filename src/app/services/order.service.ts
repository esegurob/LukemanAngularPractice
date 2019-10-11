import { Injectable } from '@angular/core';
import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  shipped: boolean = false;

  constructor(private cartServices: CartService) { }


  clear(){
    this.id = this.name= this.address = this.city =this.state = null;
    this.zip = this.country = null;
    this.shipped = false;
    this.cartServices.clear();
  }
}
