import { Component, OnInit } from '@angular/core';
import { employeeService } from '../employee.service';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.css'],
  providers: [employeeService]
})
// Ask injectable framework to provide employeeService

export class FComponent implements OnInit {
  employees: any = [];
  employeeDetails: any = [];
  // Think of employeeDetails as another component in real world
  
  constructor(private __employeeService: employeeService) { }
  ngOnInit() {
    // hardCoded data coming from service file. 
    this.employees = this.__employeeService.getEmployee()
    this.employeeDetails = this.__employeeService.getEmployee()
  }
}
// __ is used when you are using dependancies.


