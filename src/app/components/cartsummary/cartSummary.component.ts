import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cartSummary',
  templateUrl: './cartSummary.component.html',
  styleUrls: ['./cartSummary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

}
