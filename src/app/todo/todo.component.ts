import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'eat breakfast',
      completed: false,
    },
    {
      task: 'look at cat memes',
      completed: false,
    },
    {
      task: 'write more todos',
      completed: false,
    },
    {
      task: 'mine bitcoin',
      completed: false,
    },
    {
      task: 'buy legos',
      completed: false,
    },
  ];


  constructor() { }
//complete task
completeTask(index:number):void{
this.todos[index].completed = true;
}

//submitForm
submitForm(form:NgForm){
  let newTask: Todo = {
    task : form.value.task,
    completed : false
  }
  this.todos.push(newTask);
}

  ngOnInit(): void {
  }

}
