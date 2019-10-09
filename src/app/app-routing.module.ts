import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TodoComponent} from './components/todo/todo.component';
import {StoreComponent} from './components/store/store.component';
import {AssignmentComponent} from './components/assignment/assignment.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'product', component: StoreComponent},
  {path: 'assignment', component: AssignmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
