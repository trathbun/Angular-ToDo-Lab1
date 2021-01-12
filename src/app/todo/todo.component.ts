import { Component, OnInit, Input} from '@angular/core';

interface Todo{
  task:string,
  completed:boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo: Todo[];
  @Input() todos:Todo;
  textValue:string = "";

  filter: string = "";

  constructor() {

  this.todo = [
    {task:"clean room",
    completed: false},
  
    {task: "finish homework",
    completed: true},
  
    {task: "feed animals",
    completed: true},
  
    {task: "take a vacation",
    completed:false},
  
    {task: "play video games",
    completed: true}
  ]
   }
    
  ngOnInit(): void {
  }

  getFilteredResults(): Todo[]{
    return this.todo.filter((todo) =>{
      return todo.task.toLowerCase().includes(this.filter.toLocaleLowerCase());
    })
  }

  removeTask(event){
    const id = event;

    const deleteIndex = this.todo.findIndex(function(todos){
    
      return todos.task === id;
    })

    this.todo.splice(deleteIndex,1);
    
  }

  addTask(event){

    const newTask = event;

    const newTodo = {
      task: newTask,
      completed: false
    }

    this.todo.push(newTodo);
    this.textValue = "";

  }

  completeTask(event){

    return event.completed = true;

  }

}
