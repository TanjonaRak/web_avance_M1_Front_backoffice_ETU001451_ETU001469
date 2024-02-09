import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/modelAll';
import url from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url_base = "/employee";

  constructor(private httpClient:HttpClient) { }

  CreateEmployee(employee_to_create:Employee ):Observable<any>{
    // console.log(JSON.stringify(employee_to_create))
    try {
      let res = this.httpClient.post(url+this.url_base,JSON.parse(JSON.stringify(employee_to_create)));
      return res;
    } catch (error) {
      throw error;
    }
  }

  getEmployee(offset ?: number,limit?:number) :Observable<any>{
    try {
      let res = this.httpClient.get<any>(url+this.url_base+"/"+offset+"/"+limit);
      return res;
    } catch (error) {
      throw error;
    }
  }

  UpdateEmployee(employee:Employee):Observable<any>{
    try {
      let res = this.httpClient.put<any>(url+this.url_base,JSON.parse(JSON.stringify(employee)))
      return res;     
    } catch (error) {
      throw error
    }
  }
}