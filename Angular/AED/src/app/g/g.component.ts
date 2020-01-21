import { Component, OnInit } from '@angular/core';
import { employeeService } from './employee.service';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css'],
  providers: [employeeService]
})

export class GComponent implements OnInit {
  public errMsg;
  public employees;
  constructor(private __employeeService: employeeService) { }

  ngOnInit() {
        // below is when you are using http to call the service method
        // and to subscribe to the Observable.
        this.__employeeService.getEmployee()
        .subscribe(data => this.employees = data,
                   err => this.errMsg = err)
  }
}
