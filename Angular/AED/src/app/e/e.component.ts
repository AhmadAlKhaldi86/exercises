import { Component, OnInit, Input } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css'],
  inputs: [`parentData`],
  outputs: [`childEvent`]
})

export class EComponent implements OnInit {
  public parentData;
  childEvent = new EventEmitter<string>();

  onChange(value: string) {
    this.childEvent.emit(value);
  }
  

  name='Adam Jordan'
  constructor() { }

  ngOnInit() {
  }
}
