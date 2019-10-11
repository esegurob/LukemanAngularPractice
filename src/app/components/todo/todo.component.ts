import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  itemCounter: number;
  projectTask: string = " Angular Practice";
  listOfTasks =[];
  constructor() { }

  ngOnInit() {
    this.itemCounter = this.listOfTasks.length;
  }

  // this method add task in the array of listOfTask
  addItems(){
    if (this.projectTask != null || this.projectTask != '') {
    this.listOfTasks.push(this.projectTask);
    this.projectTask = '';
    this.itemCounter = this.listOfTasks.length;
    }
  }

  removeItems(i){
   // this.listOfTasks.pop();
    this.listOfTasks.splice(i,1);
    this.itemCounter = this.listOfTasks.length;
  }
}
