import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Model, TodoItem} from '../../model/Model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  model= new Model();
  inputTask: string = "Angular";
  @ViewChild('task', {static:true}) myTask: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // return all itams in the array
  getTodoItems(){
    return  this.model.items
  }
  // this method get the name
  getName(){
    return this.model.user;
  }

  // this method add task in the array of listOfTask
  addItems(projectTask: string){
    if (projectTask !="") {
     this.model.items.push( new TodoItem(projectTask,false));
     this.inputTask = '';
    }
  }

  // this method remove item in an array
  removeItems(i){
    this.model.items.splice(i,1);
  }

}
