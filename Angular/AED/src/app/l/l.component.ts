import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.css']
})
export class LComponent implements OnInit {
  public depId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.depId = id;
  }

}
