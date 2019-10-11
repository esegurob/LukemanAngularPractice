import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import {DataService} from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import {FormsModule} from '@angular/forms';
import {CartService} from './services/cart.service';
import { CartSummaryComponent } from './components/cartsummary/cartSummary.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import {OrderService} from './services/order.service';
import {OrderRepositoryService} from './services/order-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HomeComponent,
    TodoComponent,
    AssignmentComponent,
    CartSummaryComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    CartService,
    OrderService,
    OrderRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
