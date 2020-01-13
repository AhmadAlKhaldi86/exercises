import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { emit } from 'cluster';

@Component({
// Selector matches the name of the HTML element that identifies this component within a parent component's template
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// ./home.component.html anything in that file will overwrite content written.
// if you need to view the content then you need to use directives.


// OnInit is more like an event when component is initilized then 
// run function ghOnInit
export class HomeComponent implements OnInit {
  // we want to make the title dynamic in home component
  homeTitle = "Welcome to home page ... "
  myString = "I like food";
  needed = true;
  // Event binding 
  alertMe(val) {
    alert(val);
  }
  // Two way binding 
  // ninja = {
  //   name: "Adam",
  //   belt: "black",
  // }
  // for passing info from root to home.
  // @Input() ninja;
  // For passing info from home to root. 
  @Output() onYell = new EventEmitter();

  fireYellEvent(e) {
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
// to make app-home show on the page we need to add it in index.html
// but home is nested within root or app.component so we will add it under app.comp.html within section.
