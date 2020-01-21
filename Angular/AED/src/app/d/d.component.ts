import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
  public showElement = true;
  public color='red';
  public colors = ['red','blue','green'];

  public rColor = true;
  public bColor = true;

  toggle() {
    this.rColor=!this.rColor;
    this.bColor=!this.bColor;
  }

  public style = 'italic';
  public size = '30px';

  constructor() { }

  ngOnInit() {
  }

}
