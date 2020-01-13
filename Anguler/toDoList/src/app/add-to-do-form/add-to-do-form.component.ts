import { Component, OnInit } from '@angular/core';
import { tasks } from '../to-do/tasks';

@Component({
  selector: 'app-add-to-do-form',
  templateUrl: './add-to-do-form.component.html',
  styleUrls: ['./add-to-do-form.component.css']
})

// interface Todo {
//   task: string;
//   completed: boolean;
//   addTask();
// }

export class AddToDoFormComponent implements OnInit {
  tasks = tasks;
  constructor() { }
  
  ngOnInit() {
  }

  public addTask(nTask) {
    tasks.push({task: nTask, completed: false});
  }
}

