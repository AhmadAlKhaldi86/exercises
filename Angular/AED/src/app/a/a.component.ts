import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  type = "One Way Data Binding comming from variable type to the html view using {{}} string interpolation"
  source = "https://picsum.photos/200/300"
  note1 ="Above is an image used in another data binding using property binding src=''"
  
  constructor() { }

  ngOnInit() {
  }

}
