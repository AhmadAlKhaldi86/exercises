import { Component, OnInit } from '@angular/core';
import { tasks, taskModel} from '../to-do/tasks';

@Component({
  selector: 'app-filter-to-dos',
  templateUrl: './filter-to-dos.component.html',
  styleUrls: ['./filter-to-dos.component.css']
})
export class FilterToDosComponent implements OnInit {
  tasks = tasks;
  constructor() { }

  ngOnInit() {
  }

  }
