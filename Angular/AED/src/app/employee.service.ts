import { Injectable } from '@angular/core';

@Injectable()
// Register the service with injectable
// Below Uses hardCoded data in http section we will show how to get dynamic data. 

export class employeeService {
  getEmployee() {
    return [
      {"id":1,"name":"Adam","gender":"Male"},
      {"id":2,"name":"Ahmad","gender":"Male"},
      {"id":3,"name":"Dareen","gender":"Female"},
      {"id":4,"name":"Enas","gender":"Female"}
      ]
  }
}

