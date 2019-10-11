import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TodoComponent} from './components/todo/todo.component';
import {StoreComponent} from './components/store/store.component';
import {AssignmentComponent} from './components/assignment/assignment.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'product', component: StoreComponent},
  {path: 'cart', component: CartDetailsComponent},
  {path: 'assignment', component: AssignmentComponent},



  {path: '**', redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
