import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../interfaces';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
// Below is the http Example to fetch data from external resource. 
export class employeeService {
  public __url: string="/assets/data/employeedata.json"

  constructor(private __http: HttpClient) {
  }
  // make a call 
  // receive the resp as observable
  // convert it to an  observable array
  getEmployee(): Observable<IEmployee[]> {
    return this.__http.get<IEmployee[]>(this.__url).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }
  // if you havor over the getEmp you will see that you will get a observable
  // but for our application we need an array
}