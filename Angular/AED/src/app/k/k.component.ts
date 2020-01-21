import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-k',
  templateUrl: './k.component.html',
  styleUrls: ['./k.component.css']
})
export class KComponent implements OnInit {
  Departments = [
    {"id": 1, "name": "IT" },
    {"id": 2, "name": "Finance" },
    {"id": 3, "name": "Accounting" },
    {"id": 4, "name": "Sales" }
   ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(dep) {
    this.router.navigate(['/departments', dep.id])
  }
}

