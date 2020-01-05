import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// ./home.component.html anything in that file will overwrite content written.
// if you need to view the content then you need to use directives.


// OnInit is more like an event when component is initilized then 
// run function ghOnInit
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// to make app-home show on the page we need to add it in index.html
// but home is nested within root or app.component so we will add it under app.comp.html within section.
