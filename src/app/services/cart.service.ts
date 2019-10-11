import { Injectable } from '@angular/core';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public lines : CartLine[] = [];
  public itemCount : number = 0;
  public cartPrice : number = 0;

  constructor() { }

  // this method add products in the cart
  addLine(product : Product, quantity : number = 1){
    let line = this.lines.find(line => line.product.id == product.id);
    if (line!= undefined) {
      line.quantity += quantity;
    }
    else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }


  // this method update product in the cart
  updateQuantity(product: Product, quantity?: number){
    let line = this.lines.find(line => line.product.id == product.id);
    if (line!= undefined) {
      line.quantity = quantity;
    }
    this.recalculate();
  }

  // this method remove the product from the cart
  removeLine(id : number){
    let index = this.lines.findIndex(line => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  // clear the cart/ basket
  clear(){
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }


  // calculate method
  private recalculate(){
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);
    })

  }


}

export class CartLine {

  public product : Product;
  public quantity : number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  get lineTotal(){
    return this.quantity * this.product.price;
  }
}
