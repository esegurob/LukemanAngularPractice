import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  @ViewChild('newQuantity', {static: true}) newQuantity: ElementRef;

  //newQuant: number = this.newQuantity.nativeElement.value;

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

}
