export class Model {
  user: string;
  items;
  constructor(){
    this.user = "Lukeman's Todo Task";
      this.items =[
      {action:"Angular Training", done: false},
      {action:"Practice", done: false},
      {action:"Assignment", done: true},
      {action:"Do workout", done: false},
    ]
  }
}

// this class will be use to add more task in the feature
export class TodoItem {
  action;
  done;

  constructor(action, done){
    this.action = action;
    this.done = done;
  }

}
