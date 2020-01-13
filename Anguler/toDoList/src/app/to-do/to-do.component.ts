import { Component, OnInit } from '@angular/core';
import { tasks, taskModel} from './tasks';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
  tasks = tasks;
  constructor() { }

  ngOnInit() {
  }

  removeTask(searchTask) {
    let index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
  }

  completeTask(taskToComplete) {
    let index = tasks.indexOf(taskToComplete);
    tasks[index].completed= true;
  }
}