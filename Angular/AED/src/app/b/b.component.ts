import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  onClick(myInput) {
    console.log(myInput)
  }

  constructor() { }

  ngOnInit() {
  }

}
