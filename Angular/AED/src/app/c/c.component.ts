import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
   public firstName;
   public lastName;

  constructor() { }

  ngOnInit() {
  }

}
